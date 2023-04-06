import { defineStore } from "pinia";
import { store } from "@/store";
import { userType } from "./types";
import { routerArrays } from "@/layout/types";
import { router, resetRouter } from "@/router";
import { storageSession } from "@pureadmin/utils";
import { getLogin, refreshTokenApi, getUserInfo } from "@/api/user";
import { UserResult, RefreshTokenResult } from "@/api/user";
import { useMultiTagsStoreHook } from "@/store/modules/multiTags";
import { type DataInfo, setToken, removeToken, sessionKey } from "@/utils/auth";
import { regIP } from "@/utils/index";
import { ElMessage } from "element-plus";
const { VITE_APP_DOMAIN } = import.meta.env;

export const useUserStore = defineStore({
  id: "pure-user",
  state: (): userType => ({
    // 用户名
    username:
      storageSession().getItem<DataInfo<number>>(sessionKey)?.username ?? "",
    // 页面级别权限
    roles: storageSession().getItem<DataInfo<number>>(sessionKey)?.roles ?? [],
    userInfo: ""
  }),
  actions: {
    /** 存储用户名 */
    SET_USERNAME(username: string) {
      this.username = username;
    },
    /** 存储角色 */
    SET_ROLES(roles: Array<string>) {
      this.roles = roles;
    },
    /** 登入 */
    async loginByUsername(data) {
      return new Promise<UserResult>((resolve, reject) => {
        getLogin(data)
          .then(data => {
            if (data["resp_code"] === 0) {
              data["datas"] = Object.assign(data["datas"], {
                domain: regIP.test(window.location.hostname)
                  ? window.location.hostname
                  : VITE_APP_DOMAIN
              });
              setToken(data["datas"]);
              resolve(data);
            } else {
              reject(data);
            }
          })
          .catch(error => {
            reject(error);
          });
      });
    },
    /** 前端登出（不调用接口） */
    logOut() {
      this.username = "";
      this.roles = [];
      removeToken({
        domain: regIP.test(window.location.hostname)
          ? window.location.hostname
          : VITE_APP_DOMAIN
      });
      useMultiTagsStoreHook().handleTags("equal", [...routerArrays]);
      resetRouter();
      router.push("/login");
    },
    /** 刷新`token` */
    async handRefreshToken(data) {
      return new Promise<RefreshTokenResult>((resolve, reject) => {
        refreshTokenApi(data)
          .then(data => {
            if (data) {
              data["datas"] = Object.assign(data["datas"], {
                domain: regIP.test(window.location.hostname)
                  ? window.location.hostname
                  : VITE_APP_DOMAIN
              });
              setToken(data["datas"]);
              resolve(data);
            }
          })
          .catch(error => {
            reject(error);
          });
      });
    },
    /** 获取用户信息 */
    async handleGetUserInfo() {
      return new Promise<void>((resolve, reject) => {
        getUserInfo()
          .then(response => {
            const data = response.datas;
            this.userInfo = data;
            if (data.roles.length === 0 || data.roles === undefined) {
              window.localStorage.setItem("roles", JSON.stringify(false));
              ElMessage({ message: "暂无权限，请联系管理员", type: "error" });
              reject("暂无权限，请联系管理员");
            } else {
              window.localStorage.setItem("roles", JSON.stringify(true));
            }
            resolve(data);
          })
          .catch(error => {
            reject(error);
          });
      });
    }
  }
});

export function useUserStoreHook() {
  return useUserStore(store);
}
