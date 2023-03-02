export default {
  path: "/example",
  redirect: "/example/1",
  meta: {
    icon: "informationLine",
    title: "举例"
  },
  children: [
    {
      path: "/1",
      name: "举例1",
      component: () => import("@/views/example/enter1.vue"),
      meta: {
        title: "举例1"
      }
    },
    {
      path: "/2",
      name: "举例2",
      component: () => import("@/views/example/enter2.vue"),
      meta: {
        title: "举例2"
      }
    }
  ]
} as RouteConfigsTable;
