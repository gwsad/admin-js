const Layout = () => import("@/layout/enter.vue");

export default {
  path: "/",
  name: "Home",
  component: Layout,
  redirect: "/welcome",
  meta: {
    icon: "homeFilled",
    title: "首页",
    rank: 0
  },
  children: [
    {
      path: "/welcome",
      name: "Welcome",
      component: () => import("@/views/welcome/enter.vue"),
      meta: {
        title: "首页"
      }
    }
  ]
} as RouteConfigsTable;
