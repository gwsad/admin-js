import { ElButton } from "element-plus";
export const TableConfig = [
  { prop: "name", label: "银行卡名称" },
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
                type: "danger",
                text: "删除",
                size: "small",
                onClick() {
                  vm.emit("onDelete", row);
                }
              },
              "删除"
            )
          ];
        }
      }
    ]
  }
];
