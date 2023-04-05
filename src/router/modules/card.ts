export default {
  path: "/manage",
  redirect: "/manage/user",
  name: "管理列表",
  meta: {
    icon: "informationLine",
    title: "管理列表",
    showLink: true,
    rank: 11
  },
  children: [
    {
      path: "/manage/user",
      name: "user",
      component: () => import("@/views/common/user/enter.vue"),
      meta: {
        title: "用户管理"
      }
    },
    {
      path: "/manage/card",
      name: "card",
      component: () => import("@/views/common/card/enter.vue"),
      meta: {
        title: "卡片管理"
      }
    },
    {
      path: "/manage/bank",
      name: "bank",
      component: () => import("@/views/common/bank/enter.vue"),
      meta: {
        title: "银行管理"
      }
    },
    {
      path: "/manage/comment",
      name: "comment",
      component: () => import("@/views/common/comment/enter.vue"),
      meta: {
        showLink: false,
        title: "评论管理"
      }
    }
  ]
} as RouteConfigsTable;
