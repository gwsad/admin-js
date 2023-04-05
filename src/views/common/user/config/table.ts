import { ElButton } from "element-plus";
export const TableConfig = [
  { prop: "username", label: "用户名" },
  { prop: "region", label: "地区" },
  { prop: "phone", label: "手机号" },
  {
    prop: "cardId",
    label: "身份证号",
    slots: [
      {
        render(h, vm, row) {
          return [
            h(
              "span",
              {
                type: "primary",
                size: "small"
              },
              row?.identityInformation?.id || "-"
            )
          ];
        }
      }
    ]
  },
  { prop: "userLevel", label: "用户等级" },
  {
    prop: "userLevel",
    label: "用户状态",
    slots: [
      {
        render(h, vm, row) {
          return [
            h(
              "span",
              {
                type: "primary"
              },
              row.deletedAt ? "已注销" : "正常"
            )
          ];
        }
      }
    ]
  },
  { prop: "cashTotal", label: "账户金额(HK$)" },
  { prop: "createdAt", label: "创建时间" },
  {
    prop: "option",
    label: "操作",
    width: "200px",
    slots: [
      {
        render(h, vm, row) {
          return [
            h(
              ElButton,
              {
                type: row.deletedAt ? "danger" : "primary",
                size: "small",
                onClick() {
                  vm.emit("onLogOut", row);
                }
              },
              row.deletedAt ? "已注销" : "注销"
            )
          ];
        }
      },
      {
        render(h, vm, row) {
          return [
            h(
              ElButton,
              {
                type: "primary",
                size: "small",
                onClick() {
                  vm.emit("onShareData", row);
                }
              },
              "查看分享数据"
            )
          ];
        }
      }
    ]
  }
];
