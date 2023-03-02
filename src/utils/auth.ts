import Cookies from "js-cookie";
import { storageSession } from "@pureadmin/utils";
import { useUserStoreHook } from "@/store/modules/user";

export interface DataInfo<T> {
  /** token */
  access_token: string;
  /** `access_token`的过期时间（时间戳） */
  expires_in: T;
  /** 用于调用刷新accessToken的接口时所需的token */
  refreshToken: string;
  /** 用户名 */
  username?: string;
  /** 当前登陆用户的角色 */
  roles?: Array<string>;
  /** 跨平台登录 */
  domain?: string;
}

export const sessionKey = "user-info";
export const TokenKey = "token";

/** 获取`token` */
export function getToken() {
  return Cookies.get(TokenKey);
}

/**
 * @description 设置`token`以及一些必要信息并采用无感刷新`token`方案
 * 无感刷新：后端返回`access_token`（访问接口使用的`token`）、`refreshToken`（用于调用刷新`access_token`的接口时所需的`token`，`refreshToken`的过期时间（比如30天）应大于`access_token`的过期时间（比如2小时））、`expires_in`（`access_token`的过期时间）
 * 将`access_token`、`expires_in`这两条信息放在key值为authorized-token的cookie里（过期自动销毁）
 * 将`username`、`roles`、`refreshToken`、`expires_in`这四条信息放在key值为`user-info`的sessionStorage里（浏览器关闭自动销毁）
 */
export function setToken(data: DataInfo<Date>) {
  let expires_in = 0;
  const { access_token, refreshToken, domain } = data;
  expires_in = new Date(data.expires_in).getTime(); // 如果后端直接设置时间戳，将此处代码改为expires = data.expires，然后把上面的DataInfo<Date>改成DataInfo<number>即可

  expires_in > 0 && (expires_in = (expires_in - Date.now()) / 86400000);
  Cookies.set(TokenKey, access_token, { domain });

  function setSessionKey(username: string, roles: Array<string>) {
    useUserStoreHook().SET_USERNAME(username);
    useUserStoreHook().SET_ROLES(roles);
    storageSession().setItem(sessionKey, {
      refreshToken,
      expires_in,
      username,
      roles
    });
  }

  if (data.username && data.roles) {
    const { username, roles } = data;
    setSessionKey(username, roles);
  } else {
    const username =
      storageSession().getItem<DataInfo<number>>(sessionKey)?.username ?? "";
    const roles =
      storageSession().getItem<DataInfo<number>>(sessionKey)?.roles ?? [];
    setSessionKey(username, roles);
  }
}

/** 删除`token`以及key值为`user-info`的session信息 */
export function removeToken(Data: any) {
  Cookies.remove(TokenKey, Data);
  sessionStorage.clear();
}
