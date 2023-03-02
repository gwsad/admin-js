<script lang="ts">
import SrmTable from "@/components/SrmTable/enter.vue";
import SrmFilter from "@/components/SrmFilter/enter.vue";
import { defineComponent, reactive, ref } from "vue";
import { TableConfig } from "./config/table";
import { SearchForm } from "./config/filter";
export default defineComponent({
  name: "PageFooter",
  components: { SrmTable, SrmFilter },
  setup() {
    const tableConfig: any = TableConfig;
    const searchForm: any = SearchForm;
    const sourceData: any = [{ id: 1 }];
    const reqData: any = ref({}); // 请求参数
    const form: any = reactive({}); // 筛选项

    function tableOperate(row) {
      console.log("tableOperate", row);
    }

    // 筛选项发生改变
    function onSearch(data: any) {
      reqData.value = JSON.stringify(data) === "{}" ? {} : data;
    }

    return {
      tableConfig,
      sourceData,
      searchForm,
      form,
      reqData,
      tableOperate,
      onSearch
    };
  }
});
</script>

<template>
  <div class="bs">
    <h1>内部调用数据</h1>
    <SrmFilter
      :items="searchForm"
      :search-params="form"
      @search="onSearch"
      @reset="onSearch"
    />
    <SrmTable
      :columns="tableConfig"
      @tableOperate="tableOperate"
      :reqData="reqData"
      api="get|/api-user/users"
    />
  </div>
</template>
