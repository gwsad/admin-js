import { http } from "@/utils/http";

export type UserResult = {
  success: boolean;
  data: {
    /** 用户名 */
    username: string;
    /** 当前登陆用户的角色 */
    roles: Array<string>;
    /** `token` */
    accessToken: string;
    /** 用于调用刷新`accessToken`的接口时所需的`token` */
    refreshToken: string;
    /** `accessToken`的过期时间（格式'xxxx/xx/xx xx:xx:xx'） */
    expires: Date;
  };
};

export type RefreshTokenResult = {
  success: boolean;
  data: {
    /** `token` */
    accessToken: string;
    /** 用于调用刷新`accessToken`的接口时所需的`token` */
    refreshToken: string;
    /** `accessToken`的过期时间（格式'xxxx/xx/xx xx:xx:xx'） */
    expires: Date;
  };
};

/** 登录 */
export const getLogin = (data?: object) => {
  return http.request<UserResult>("post", "/api-uaa/oauth/token", {
    params: data
  });
};

// 获取验证码
export const getPhoneCode = (mobile?: string) => {
  return http.request<UserResult>(
    "get",
    `/api-user/user/sendLoginSMS?mobile=${mobile}`
  );
};

// 获取图形验证码
export const getImgCode = (code?: string) => {
  return http.request<UserResult>("get", `/api-uaa/validata/code/${code}`, {
    responseType: "blob"
  });
};

/** 刷新token */
export const refreshTokenApi = (data?: object) => {
  return http.request<RefreshTokenResult>("post", "/refreshToken", { data });
};

//获取用户信息
export const getUserInfo = () => {
  return http.request<void>("get", "/api-user/users/current");
};
//获取图片域名
export const configListBefore = params => {
  return http.request<void>("get", "/api-user/configListBefore/", {
    params: { value: params }
  });
};

// admin;

// 登录
export const login = (data?: object) => {
  return http.request<UserResult>("post", "/admin/auth/login", { data });
};

// 获取用户列表
export const getUserList = (data?: object) => {
  return http.request<UserResult>("get", "/admin/user/query", { params: data });
};

// 银行列表
export const getBankList = () => {
  return http.request<UserResult>("get", "/admin/bank/list");
};

// 新增银行
export const addBank = (data?: object) => {
  return http.request<UserResult>("post", "/admin/bank/add", { data });
};

// 订单列表
export const getOrderList = (data?: object) => {
  return http.request<UserResult>("get", "/admin/order/list", { params: data });
};

// 提现列表
export const getWithdrawList = (data?: object) => {
  return http.request<UserResult>("get", "/admin/withdraw/list", {
    params: data
  });
};

// 获取卡片分类
export const getCardType = () => {
  return http.request<UserResult>("get", "/admin/card/categorylist");
};

// 获取卡片列表
export const getCardList = (id, data) => {
  return http.request<UserResult>("get", `/admin/card/${id}/list`, {
    params: data
  });
};

// 注销用户
export const logout = userId => {
  return http.request<UserResult>("delete", `/admin/user/${userId}`);
};

// 操作提现
export const optionWithdraw = data => {
  return http.request("post", `/admin/withdraw/${data.id}`, {
    data: data.type
  });
};

// 订单操作
export const optionOrder = data => {
  return http.request("post", `/admin/order/${data.id}`, { data: data.type });
};

// 设置热门
export const setHot = (id, data) => {
  return http.request("put", `/admin/card/${id}`, { data });
};

// 新增卡券
export const addCard = (id, data) => {
  return http.request("post", `/admin/card/${id}/add`, { data });
};
