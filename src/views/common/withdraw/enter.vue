<script lang="ts" setup>
import { defineComponent, reactive, ref, onBeforeMount } from "vue";
import { ElMessage, ElMessageBox } from "element-plus";
import { TableConfig } from "./config/table";
import { SearchForm } from "./config/filter";
import { getWithdrawList, optionWithdraw } from "@/api/user";

const tableConfig: any = TableConfig;
const searchForm: any = SearchForm;
const sourceData: any = ref([]);
const reqData: any = ref({
  status: 0
}); // 请求参数
const form: any = reactive({}); // 筛选项
const total = ref(0); // 总条数
const pageInfo = ref({ page: 1, limit: 10 }); // 分页信息

onBeforeMount(() => {
  getWithdrawListFn();
});

const getWithdrawListFn = async () => {
  sourceData.value = [];
  const { data } = await getWithdrawList(
    Object.assign(reqData.value, {
      current: pageInfo.value.page,
      pageSize: pageInfo.value.limit
    })
  );
  sourceData.value = data.list;
  total.value = data.totalCount;
};
const onCurrentChange = type => {
  pageInfo.value = type;
  getWithdrawListFn();
};

// 筛选项发生改变
function onSearch(data: any) {
  reqData.value = JSON.stringify(data) === "{}" ? {} : data;
  getWithdrawListFn();
}

//
const onSuccess = (data: any) => {
  ElMessageBox.confirm("确认打款成功吗？", { type: "success" })
    .then(async () => {
      const _res = {
        id: data._id,
        type: {
          status: 2
        }
      };
      await optionWithdraw(_res);
      getWithdrawListFn();
    })
    .catch(error => {
      console.log("操作失败", error);
    });
};
const onError = (data: any) => {
  ElMessageBox.confirm("确认审核失败吗？", { type: "warning" })
    .then(async () => {
      const _res = {
        id: data._id,
        type: {
          status: 3,
          rejectMessage: ""
        }
      };
      await optionWithdraw(_res);
      getWithdrawListFn();
    })
    .catch(() => {
      console.log("操作失败");
    });
};
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
      @onSuccess="onSuccess"
      @onError="onError"
      @currentChange="onCurrentChange"
    />
  </div>
</template>
