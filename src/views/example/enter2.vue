<script lang="ts" setup>
import SrmTable from "@/components/SrmTable/enter.vue";
import SrmFilter from "@/components/SrmFilter/enter.vue";
import { defineComponent, reactive, ref } from "vue";
import { TableConfig } from "./config/table";
import { SearchForm } from "./config/filter";

defineComponent({
  name: "PageFooter",
  components: { SrmTable, SrmFilter }
});
const tableConfig: any = TableConfig;
const searchForm: any = SearchForm;
const sourceData: any = [
  {
    id: 1,
    date: "2016-05-02",
    name: "王小虎",
    address: "上海市普陀区金沙江路 1518 弄"
  },
  {
    id: 2,
    date: "2016-05-04",
    name: "王小虎",
    address: "上海市普陀区金沙江路 1517 弄"
  },
  {
    id: 3,
    date: "2016-05-01",
    name: "王小虎",
    address: "上海市普陀区金沙江路 1519 弄",
    children: [
      {
        id: 31,
        date: "2016-05-01",
        name: "王小虎",
        address: "上海市普陀区金沙江路 1519 弄"
      },
      {
        id: 32,
        date: "2016-05-01",
        name: "王小虎",
        address: "上海市普陀区金沙江路 1519 弄"
      }
    ]
  },
  {
    id: 4,
    date: "2016-05-03",
    name: "王小虎",
    address: "上海市普陀区金沙江路 1516 弄"
  }
];
const reqData: any = ref({}); // 请求参数
const form: any = reactive({}); // 筛选项
const onCurrentChange = type => {
  console.log("type", type);
};

function tableOperate() {
  console.log("tableOperate");
}

// 筛选项发生改变
function onSearch(data: any) {
  console.log("data", data);
  reqData.value = JSON.stringify(data) === "{}" ? {} : data;
}
</script>

<template>
  <div class="bs">
    <h1 class="mb-10">
      script标签接入setup(模版中表达式与script中代码处于同一作用域) 外部传入数据
    </h1>
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
      :pageRequest="{ page: 2, limit: 10 }"
      :listTotal="56"
      :foldRow="{}"
      @tableOperate="tableOperate"
      @currentChange="onCurrentChange"
    />
  </div>
</template>
