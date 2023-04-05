export const SearchForm = [
  { name: "卡片名称", key: "nickName", showLabel: true },
  {
    name: "是否热门",
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
        label: "是"
      },
      {
        value: "2",
        label: "否"
      }
    ]
  }
];
