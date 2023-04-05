<script lang="ts" setup>
import { defineComponent, reactive, ref, onBeforeMount } from "vue";
import { ElMessage, ElMessageBox } from "element-plus";
import { TableConfig } from "./config/table";
import { ShareConfig } from "./config/share";
import { SearchForm } from "./config/filter";
import { getUserList, logout } from "@/api/user";

defineComponent({
  name: "PageFooter"
});
const tableConfig: any = TableConfig;
const searchForm: any = SearchForm;
const shareConfig: any = ShareConfig;
const sourceData: any = ref([]);
const reqData: any = ref({}); // 请求参数
const form: any = reactive({}); // 筛选项
const dialogVisible = ref(false); // 分享弹窗
const total = ref(0); // 总条数
const pageInfo = ref({ page: 1, limit: 10 }); // 分页信息
// 分享数据
const shareList = ref([]);

onBeforeMount(() => {
  getUserListFn();
});

// 获取用户列表信息
const getUserListFn = async () => {
  const { data } = await getUserList(
    Object.assign(reqData.value, {
      current: pageInfo.value.page,
      pageSize: pageInfo.value.limit
    })
  );
  sourceData.value = data?.list;
  total.value = data?.totalCount;
};

// 打开分享弹窗数据
const onShareData = (data: any) => {
  dialogVisible.value = true;
  shareList.value = data.userShareList;
};
// 注销按钮
const onLogOut = row => {
  if (row.deletedAt) {
    ElMessage.error("该账号已注销");
    return;
  }
  ElMessageBox.confirm("确认注销该账号吗？", { type: "warning" })
    .then(() => {
      logout(row._id).then(() => {
        ElMessage.success("注销成功");
        getUserListFn();
      });
    })
    .catch(() => {
      console.log("取消删除");
    });
};

const onCurrentChange = type => {
  pageInfo.value = type;
  getUserListFn();
};

// 筛选项发生改变
function onSearch(data: any) {
  form.value = JSON.stringify(data) === "{}" ? {} : data;
  reqData.value = JSON.stringify(data) === "{}" ? {} : data;
  getUserListFn();
}

//
</script>

<template>
  <div class="bs">
    <SrmFilter
      :items="searchForm"
      :search-params="form"
      @search="onSearch"
      @reset="onSearch"
    />
    <SrmTable
      :columns="tableConfig"
      :sourceData="sourceData"
      :pageRequest="pageInfo"
      :listTotal="total"
      :reqData="reqData"
      @onShareData="onShareData"
      @onLogOut="onLogOut"
      @currentChange="onCurrentChange"
    />
    <el-dialog v-model="dialogVisible" title="分享数据" width="30%">
      <SrmTable :sourceData="shareList" :columns="shareConfig" />
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="dialogVisible = false">
            确认
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>
