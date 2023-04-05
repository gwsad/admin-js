export const SearchForm = [
  { name: "用户名称", key: "nickname", showLabel: true },
  { name: "手机号", key: "phone", showLabel: true },
  {
    name: "用户状态",
    key: "status",
    type: "select",
    showLabel: true,
    options: [
      {
        value: "0",
        label: "全部"
      },
      {
        value: "2",
        label: "注销"
      },
      {
        value: "1",
        label: "正常"
      }
    ]
  }
];
