<script lang="ts" setup>
import { ref, onBeforeMount } from "vue";
import { ElMessage, ElMessageBox } from "element-plus";
import { TableConfig } from "./config/table";
import { getBankList, addBank } from "@/api/user";

const tableConfig: any = TableConfig;
const sourceData: any = ref([]);
const dialogVisible = ref(false); // 配置信息弹窗
const bankName = ref(""); // 配置信息

onBeforeMount(() => {
  getBankListFn();
});

// 获取银行数据
const getBankListFn = async () => {
  const { data } = await getBankList();
  sourceData.value = data;
};

// 注销按钮
const onLogOut = () => {
  ElMessageBox.confirm("确认注销该账号吗？", { type: "warning" })
    .then(() => {
      console.log("删除成功");
    })
    .catch(() => {
      console.log("取消删除");
    });
};

const onCurrentChange = type => {
  console.log("type", type);
};

// 打开操作银行弹窗
const optionBank = () => {
  dialogVisible.value = true;
};

// 新增银行
const onAddBank = async () => {
  if (!bankName.value) {
    return ElMessage.error("请输入银行名称");
  }
  try {
    const res = await addBank({ name: bankName.value });
    if (res.code === 40000) {
      return ElMessage.error(res.message);
    }
    getBankListFn();
  } catch (error) {
    return false;
  }
  dialogVisible.value = false;
};

//
</script>

<template>
  <div class="bs">
    <el-button class="mb-10" type="primary" @click="optionBank">新增</el-button>
    <SrmTable
      :columns="tableConfig"
      :sourceData="sourceData"
      :listTotal="0"
      @onDelete="onLogOut"
      @currentChange="onCurrentChange"
    />
    <el-dialog
      v-if="dialogVisible"
      v-model="dialogVisible"
      title="新增银行"
      width="30%"
    >
      <el-input v-model="bankName" placeholder="请输入银行名称" />
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="onAddBank">确定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>
