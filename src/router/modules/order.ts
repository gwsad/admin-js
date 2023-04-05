export default {
  path: "/order",
  redirect: "/order/list",
  name: "账单",
  meta: {
    icon: "informationLine",
    title: "账单列表",
    showLink: true,
    rank: 11
  },
  children: [
    {
      path: "/order/list",
      name: "order",
      component: () => import("@/views/common/order/enter.vue"),
      meta: {
        title: "订单管理"
      }
    },
    {
      path: "/order/withdraw",
      name: "withdraw",
      component: () => import("@/views/common/withdraw/enter.vue"),
      meta: {
        title: "提现管理"
      }
    }
  ]
} as RouteConfigsTable;
