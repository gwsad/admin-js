import { reactive } from "vue";
import type { FormRules } from "element-plus";

/** 密码正则（密码格式应为8-18位数字、字母、符号的任意两种组合） */
export const REGEXP_PWD =
  /^(?![A-z0-9]+$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}$/;

// 手机号正则
export const regMobile = /^1[23456789][0-9]{9}$/;

// 验证码校验
export const regCode = /^[0-9]{6}$/;

/** 登录校验 */
const loginRules = reactive(<FormRules>{
  mobile: [
    {
      validator: (rule, value, callback) => {
        if (value === "") {
          callback(new Error("请输入手机号"));
        } else if (!regMobile.test(value)) {
          callback(new Error("请输入正确的手机号"));
        } else {
          callback();
        }
      },
      trigger: "blur"
    }
  ],
  password: [
    {
      validator: (rule, value, callback) => {
        if (value === "") {
          callback(new Error("请输入密码"));
        } else {
          callback();
        }
      },
      trigger: "blur"
    }
  ]
});

export { loginRules };
