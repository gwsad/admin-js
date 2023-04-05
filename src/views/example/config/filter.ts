export const SearchForm = [
  {
    name: "投稿来源",
    key: "source",
    type: "select",
    showLabel: true,
    options: [
      {
        value: "0",
        label: "全部"
      },
      {
        value: "1",
        label: "用户投稿"
      },
      {
        value: "2",
        label: "抓取投稿"
      }
    ]
  },
  {
    name: "投稿品类",
    key: "categoryId",
    type: "select",
    showLabel: true,
    multiple: true,
    options: [
      {
        value: "0",
        label: "全部"
      },
      {
        value: "1",
        label: "用户投稿"
      },
      {
        value: "2",
        label: "抓取投稿"
      }
    ]
  },
  {
    name: "处理状态",
    key: "auditStatus",
    type: "select",
    showLabel: true,
    options: [
      {
        value: "0",
        label: "全部"
      },
      {
        value: "1",
        label: "未处理"
      },
      {
        value: "2",
        label: "处理下架"
      },
      {
        value: "3",
        label: "不下架"
      }
    ]
  },
  // { name: "ID搜索", key: "id", type: "number", showLabel: true },
  {
    name: "活动时间",
    key: "picker:startTime,endTime",
    type: "daterange",
    valueType: "string",
    startPlaceholder: "开始时间",
    endPlaceholder: "结束时间",
    showLabel: true
  },
  { name: "ID搜索", key: "ids", showLabel: true }
];
