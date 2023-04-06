<script lang="ts" setup>
import { reactive, ref, onBeforeMount } from "vue";
import { ElMessageBox } from "element-plus";
import { TableConfig } from "./config/table";
import { SearchForm } from "./config/filter";
import { getOrderList, optionOrder } from "@/api/user";
const pageInfo = ref({ page: 1, limit: 10 });

const tableConfig: any = TableConfig;
const searchForm: any = SearchForm;
const sourceData: any = ref([]);
const total = ref(0); // 总条数
const reqData: any = ref({
  status: 0
}); // 请求参数
const form: any = reactive({}); // 筛选项

onBeforeMount(() => {
  getOrderListFn();
});

const getOrderListFn = async () => {
  sourceData.value = [];
  const { data } = await getOrderList(
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
  getOrderListFn();
};

// 筛选项发生改变
function onSearch(data: any) {
  reqData.value = JSON.stringify(data) === "{}" ? {} : data;
  getOrderListFn();
}

//

const onSuccess = (data: any) => {
  ElMessageBox.confirm("确认交易成功吗？", { type: "success" })
    .then(async () => {
      const _res = {
        id: data._id,
        type: {
          status: 2
        }
      };
      await optionOrder(_res);
      getOrderListFn();
    })
    .catch(error => {
      console.log("操作失败", error);
    });
};

const onError = (data: any) => {
  ElMessageBox.confirm("确认交易失败吗？", { type: "warning" })
    .then(async () => {
      const _res = {
        id: data._id,
        type: {
          status: 3
        }
      };
      await optionOrder(_res);
      getOrderListFn();
    })
    .catch(error => {
      console.log("操作失败", error);
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
      :reqData="reqData"
      :pageRequest="pageInfo"
      :listTotal="total"
      @onSuccess="onSuccess"
      @onError="onError"
      @currentChange="onCurrentChange"
    />
  </div>
</template>
