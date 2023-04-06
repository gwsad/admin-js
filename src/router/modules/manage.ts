export default {
  path: "/manage",
  redirect: "/manage/user",
  meta: {
    icon: "class",
    title: "管理列表",
    rank: 2
  },
  children: [
    {
      path: "/user",
      name: "user",
      component: () => import("@/views/common/user/enter.vue"),
      meta: {
        title: "用户管理"
      }
    },
    {
      path: "/card",
      name: "card",
      component: () => import("@/views/common/card/enter.vue"),
      meta: {
        title: "卡片管理"
      }
    },
    {
      path: "/bank",
      name: "bank",
      component: () => import("@/views/common/bank/enter.vue"),
      meta: {
        title: "银行管理"
      }
    },
    {
      path: "/order",
      name: "order",
      component: () => import("@/views/common/order/enter.vue"),
      meta: {
        title: "订单管理"
      }
    },
    {
      path: "/withdraw",
      name: "withdraw",
      component: () => import("@/views/common/withdraw/enter.vue"),
      meta: {
        title: "提现管理"
      }
    }
  ]
} as RouteConfigsTable;
