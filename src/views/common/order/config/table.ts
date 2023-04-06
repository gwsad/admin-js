import { ElButton } from "element-plus";
export const TableConfig = [
  { prop: "_id", label: "订单ID" },
  { prop: "cardName", label: "卡片名称" },
  { prop: "categoryName", label: "卡片类别" },
  {
    prop: "nickname",
    label: "卡号",
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
              row.cardInfo ? row?.cardInfo?.number : "-"
            )
          ];
        }
      }
    ]
  },
  {
    prop: "nickname",
    label: "卡密",
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
              row.cardInfo ? row?.cardInfo?.pass : "-"
            )
          ];
        }
      }
    ]
  },
  { prop: "amount", label: "面值（HK$）" },
  {
    prop: "option",
    label: "订单状态",
    width: "100px",
    fixed: "left",
    slots: [
      {
        render(h, vm, row) {
          return [
            h(
              "span",
              {
                type: "primary"
              },
              row.status.code === 3
                ? "交易失败"
                : row.status.code === 2
                ? "交易成功"
                : "交易处理中"
            )
          ];
        }
      }
    ]
  },
  {
    prop: "option",
    label: "操作",
    width: "200px",
    fixed: "right",
    slots: [
      {
        render(h, vm, row) {
          return [
            h(
              ElButton,
              {
                type: "primary",
                text: "交易成功",
                size: "small",
                style: `display: ${
                  row.status.code === 1 ? "inline-block" : "none"
                }`,
                onClick() {
                  vm.emit("onSuccess", row);
                }
              },
              "交易成功"
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
                type: "danger",
                text: "交易失败",
                size: "small",
                style: `display: ${row.status === 1 ? "inline-block" : "none"}`,
                onClick() {
                  vm.emit("onError", row);
                }
              },
              "交易失败"
            )
          ];
        }
      }
    ]
  }
];
