const Layout = () => import("@/layout/enter.vue");

export default {
  path: "/",
  name: "Home",
  component: Layout,
  redirect: "/home",
  meta: {
    icon: "homeFilled",
    title: "首页",
    rank: 0
  },
  children: [
    {
      path: "/home",
      name: "Home",
      component: () => import("@/views/welcome/enter.vue"),
      meta: {
        title: "首页"
      }
    }
  ]
} as RouteConfigsTable;
