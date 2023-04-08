import { ElButton, ElImage } from "element-plus";
// facevalues
export const TableConfig = [
  { prop: "categoryId", label: "卡片ID" },
  { prop: "name", label: "卡片名称" },
  {
    prop: "region",
    label: "卡片icon",
    slots: [
      {
        render(h, vm, row) {
          let _face = "";
          row.facevalues.forEach((item: any) => {
            _face += item + " ";
          });
          return [
            h(
              ElImage,
              {
                src: row.image
              },
              _face
            )
          ];
        }
      }
    ]
  },
  { prop: "discount", label: "折扣" },
  {
    prop: "discount",
    label: "面值",
    slots: [
      {
        render(h, vm, row) {
          let _face = "";
          row.facevalues.forEach((item: any) => {
            _face += item + " ";
          });
          return [
            h(
              "span",
              {
                vModel: row.isHot
              },
              _face
            )
          ];
        }
      }
    ]
  },
  {
    prop: "isHot",
    label: "是否热门",
    slots: [
      {
        render(h, vm, row) {
          return [
            h(
              "span",
              {
                vModel: row.isHot,
                inlinePrompt: true,
                activeText: "是",
                inactiveText: "否",
                onClick() {
                  vm.emit("onChangeHot", row);
                }
              },
              row.isHot ? "是" : "否"
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
    slots: [
      {
        render(h, vm, row) {
          return [
            h(
              ElButton,
              {
                type: "primary",
                size: "small",
                text: "上热门",
                onClick() {
                  vm.emit("onHot", row);
                }
              },
              row.isHot !== 1 ? "上热门" : "取消热门"
            ),
            h(
              ElButton,
              {
                type: "primary",
                text: "修改",
                size: "small",
                onClick() {
                  vm.emit("onEdit", row);
                }
              },
              "修改"
            ),
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
