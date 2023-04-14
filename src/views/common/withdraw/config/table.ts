import { ElButton } from "element-plus";
export const TableConfig = [
  { prop: "amount", width: "120px", label: "提现金额（HK$）" },
  {
    prop: "phone",
    label: "卡主名称",
    slots: [
      {
        render(h, vm, row) {
          return [
            h(
              "span",
              {
                type: "primary",
                text: "成功"
              },
              row.accountInfo.bank ? row.accountInfo.bank.username : "-"
            )
          ];
        }
      }
    ]
  },
  {
    prop: "phone",
    width: "200px",
    label: "银行卡号",
    slots: [
      {
        render(h, vm, row) {
          return [
            h(
              "span",
              {
                type: "primary"
              },
              row.accountInfo.bank ? row.accountInfo.bank.bank : "-"
            )
          ];
        }
      }
    ]
  },
  // {
  //   prop: "phone",
  //   width: "150px",
  //   label: "USDT地址（erc20）",
  //   slots: [
  //     {
  //       render(h, vm, row) {
  //         return [
  //           h(
  //             "span",
  //             {
  //               type: "primary"
  //             },
  //             row.accountInfo.usdt && row.accountInfo.usdt.name === "erc20"
  //               ? row.accountInfo.usdt.address
  //               : "-"
  //           )
  //         ];
  //       }
  //     }
  //   ]
  // },
  // {
  //   prop: "phone",
  //   width: "150px",
  //   label: "USDT地址（trc20）",
  //   slots: [
  //     {
  //       render(h, vm, row) {
  //         return [
  //           h(
  //             "span",
  //             {
  //               type: "primary"
  //             },
  //             row.accountInfo.usdt && row.accountInfo.usdt.name === "trc20"
  //               ? row.accountInfo.usdt.address
  //               : "-"
  //           )
  //         ];
  //       }
  //     }
  //   ]
  // },
  {
    prop: "phone",
    width: "200px",
    label: "支付宝名称",
    slots: [
      {
        render(h, vm, row) {
          return [
            h(
              "span",
              {
                type: "primary"
              },
              row.accountInfo.alipay ? row.accountInfo.alipay.account : "-"
            )
          ];
        }
      }
    ]
  },
  {
    prop: "phone",
    width: "200px",
    label: "支付宝账号",
    slots: [
      {
        render(h, vm, row) {
          return [
            h(
              "span",
              {
                type: "primary"
              },
              row.accountInfo.alipay ? row.accountInfo.alipay.accountName : "-"
            )
          ];
        }
      }
    ]
  },
  { prop: "createdAt", label: "创建时间" },
  {
    prop: "updatedAt",
    label: "提现状态",
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
              row.status.message
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
                text: "成功",
                style: `display: ${
                  row.status.message === "处理中" ? "inline-block" : "none"
                }`,
                onClick() {
                  vm.emit("onSuccess", row);
                }
              },
              "打款成功"
            ),
            h(
              ElButton,
              {
                type: "danger",
                text: "失败",
                size: "small",
                style: `display: ${
                  row.status.message === "处理中" ? "inline-block" : "none"
                }`,
                onClick() {
                  vm.emit("onError", row);
                }
              },
              "审核失败"
            )
          ];
        }
      }
    ]
  }
];
