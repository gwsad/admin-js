// import "@/utils/sso";
import { getConfig } from "@/config";
import NProgress from "@/utils/progress";
import { usePermissionStoreHook } from "@/store/modules/permission";
import { useUserStoreHook } from "@/store/modules/user";
import {
  Router,
  createRouter,
  RouteRecordRaw,
  RouteComponent
} from "vue-router";
import {
  ascending,
  initRouter,
  getHistoryMode,
  formatTwoStageRoutes,
  formatFlatteningRoutes
} from "./utils";
import { buildHierarchyTree } from "@/utils/tree";
import { isUrl } from "@pureadmin/utils";
import { getToken } from "@/utils/auth";

import remainingRouter from "./modules/remaining";

/** 自动导入全部静态路由，无需再手动引入！匹配 src/router/modules 目录（任何嵌套级别）中具有 .ts 扩展名的所有文件，除了 remaining.ts 文件
 * 如何匹配所有文件请看：https://github.com/mrmlnc/fast-glob#basic-syntax
 * 如何排除文件请看：https://cn.vitejs.dev/guide/features.html#negative-patterns
 */
const modules: Record<string, any> = import.meta.glob(
  ["./modules/**/*.ts", "!./modules/**/remaining.ts"],
  {
    eager: true
  }
);

/** 原始静态路由（未做任何处理） */
const routes = [];

Object.keys(modules).forEach(key => {
  routes.push(modules[key].default);
});

export const routerArrays = routes;

/** 导出处理后的静态路由（三级及以上的路由全部拍成二级） */
export const constantRoutes: Array<RouteRecordRaw> = formatTwoStageRoutes(
  formatFlatteningRoutes(buildHierarchyTree(ascending(routes)))
);

/** 用于渲染菜单，保持原始层级 */
export const constantMenus: Array<RouteComponent> = ascending(routes).concat(
  ...remainingRouter
);

/** 不参与菜单的路由 */
export const remainingPaths = Object.keys(remainingRouter).map(v => {
  return remainingRouter[v].path;
});

/** 创建路由实例 */
export const router: Router = createRouter({
  history: getHistoryMode(),
  routes: constantRoutes.concat(...(remainingRouter as any)),
  strict: true,
  scrollBehavior(to, from, savedPosition) {
    return new Promise(resolve => {
      if (savedPosition) {
        return savedPosition;
      } else {
        if (from.meta.saveSrollTop) {
          const top: number =
            document.documentElement.scrollTop || document.body.scrollTop;
          resolve({ left: 0, top });
        }
      }
    });
  }
});

/** 重置路由 */
export function resetRouter() {
  router.getRoutes().forEach(route => {
    const { name, meta } = route;
    if (name && router.hasRoute(name) && meta?.backstage) {
      router.removeRoute(name);
      router.options.routes = formatTwoStageRoutes(
        formatFlatteningRoutes(buildHierarchyTree(ascending(routes)))
      );
    }
  });
}

/** 路由白名单 */
const whiteList = ["/login"];

router.beforeEach(async (to: toRouteType, _from, next) => {
  // 获取token 判断有无token判断是否跳转登录页
  // const token = getToken();
  NProgress.start();
  const externalLink = isUrl(to?.name as string);
  if (!externalLink) {
    to.matched.some(item => {
      if (!item.meta.title) return "";
      const Title = getConfig().Title;
      if (Title) document.title = `${item.meta.title} | ${Title}`;
      else document.title = item.meta.title as string;
    });
  }
  await initRouter();
  next();
  /** 如果已经登录并存在登录信息后不能跳转到路由白名单，而是继续保持在当前页面 */
  // if (token && JSON.parse(window.localStorage.getItem("roles"))) {
  //   if (to.fullPath === "/login") {
  //     next({ path: "/" });
  //   } else {
  //     if (
  //       usePermissionStoreHook().wholeMenus.length === 0 &&
  //       to.path !== "/login"
  //     ) {
  //       try {
  //         await useUserStoreHook().handleGetUserInfo();
  //         await useUserStoreHook().getConfigListBefore();
  //       } catch (error) {
  //         next({ path: "/login" });
  //       }
  //       await initRouter();
  //     }
  //     next();
  //   }
  // } else {
  //   if (to.path !== "/login") {
  //     if (whiteList.indexOf(to.path) !== -1) {
  //       next();
  //     } else {
  //       next({ path: "/login" });
  //     }
  //   } else {
  //     next();
  //   }
  // }
});

router.afterEach(() => {
  NProgress.done();
});
export default router;
