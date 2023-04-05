import { ElButton } from "element-plus";
export const TableConfig = [
  { prop: "id", label: "ID" },
  { prop: "title", label: "标题" },
  { prop: "authorName", label: "作者" },
  { prop: "categoryName", label: "品类标签" },
  { prop: "reportTypeName", label: "类型" },
  {
    prop: "address",
    label: "来源",
    width: 200,
    fixed: "right",
    slots: [
      {
        render(h, vm, row) {
          return h(
            ElButton,
            {
              type: "success",
              size: "small",
              onClick() {
                vm.emit("tableOperate", row);
              }
            },
            row.id
          );
        }
      }
    ]
  },
  {
    prop: "reporterName",
    label: "举报者",
    slots: [
      {
        render() {
          return "123";
        }
      }
    ]
  },
  { prop: "description", label: "举报原因" },
  { prop: "reportedNum", label: "举报次数" }
];
