<script setup lang="ts">
import { message } from "@/utils/message";
import { useRouter } from "vue-router";
import { loginRules } from "./utils/rule";
import type { FormInstance } from "element-plus";
import { useLayout } from "@/layout/hooks/useLayout";
import { useUserStoreHook } from "@/store/modules/user";
import { ref, reactive, onMounted, onBeforeUnmount } from "vue";
import { MathUUid } from "@/utils/index";
import { getImgCode } from "@/api/user";
import loginLeft from "@/assets/login/project-login-left.png";

defineOptions({
  name: "Login"
});
const loading = ref(false);
const ruleFormRef = ref<FormInstance>();
const router = useRouter();
const { initStorage } = useLayout();
initStorage();

const ruleForm = reactive({
  mobile: "",
  password: "",
  automaticLogin: 7,
  grant_type: "mobile_password"
});

const imgCode = ref(""); // 验证码
const showImgCode = ref(false); // 是否显示验证码
const imgCodeUrl = ref(""); // 验证码图片链接
const deviceId = ref(""); // uuid用来登录

const onLogin = async (formEl: FormInstance | undefined) => {
  loading.value = true;
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      useUserStoreHook()
        .loginByUsername(ruleForm)
        .then(res => {
          if (res["resp_code"] === 0) {
            router.push("/");
            message("登录成功", { type: "success" });
          }
        })
        .catch(e => {
          if (["3011", "3006", "3007"].includes(e.resp_code)) {
            showImgCode.value = true;
            getImageCode();
          }
          if (showImgCode.value && e.resp_code === "3004") {
            ruleForm.password = "";
            imgCode.value = "";
            showImgCode.value = true;
            getImageCode();
          }
          loading.value = false;
        });
    } else {
      loading.value = false;
      return fields;
    }
  });
};

/** 使用公共函数，避免`removeEventListener`失效 */
function onkeypress({ code }: KeyboardEvent) {
  if (code === "Enter") {
    onLogin(ruleFormRef.value);
  }
}

// 重新获取验证码
async function getImageCode() {
  deviceId.value = MathUUid();
  const res: any = await getImgCode(deviceId.value);
  const blob = new Blob([res]);
  imgCodeUrl.value = window.URL.createObjectURL(blob);
}

onMounted(() => {
  window.document.addEventListener("keypress", onkeypress);
});

onBeforeUnmount(() => {
  window.document.removeEventListener("keypress", onkeypress);
});
</script>

<template>
  <div class="select-none">
    <div class="login-container">
      <el-image class="login-container__left" :src="loginLeft" fit="cover" />
      <div class="login-container__right">
        <h2 class="outline-none" style="text-align: center">登录</h2>
        <el-form
          ref="ruleFormRef"
          :model="ruleForm"
          :rules="loginRules"
          size="large"
        >
          <el-form-item
            :rules="[
              {
                required: true,
                message: '请输入手机号',
                trigger: 'blur'
              }
            ]"
            prop="mobile"
          >
            <el-input
              class="common-input special-input"
              v-model="ruleForm.mobile"
              maxlength="11"
              placeholder="请输入手机号"
            />
          </el-form-item>

          <el-form-item prop="password" class="special-form">
            <el-input
              class="common-input special-input"
              v-model="ruleForm.password"
              placeholder="请输入密码"
            />
          </el-form-item>

          <el-button
            class="w-full mt-4 login-btn"
            size="default"
            :loading="loading"
            @click="onLogin(ruleFormRef)"
          >
            登录
          </el-button>
        </el-form>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url("@/style/login.css");
</style>

<style lang="scss" scoped>
.select-none {
  background: #eff4ff;
  min-height: 100vh;
}
.login-container {
  width: 1080px;
  height: 590px;
  background: #ffffff;
  border-radius: 15px;
  margin: 0 auto;
  display: flex;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.login-container__left {
  width: 50%;
  height: 100%;
  border-radius: 15px 0 0 15px;
}
.login-container__right {
  margin: auto;
  text-align: left;
  transition: all 1s linear;
  h2 {
    margin-bottom: 48px;
  }
}

.special-form {
  position: relative;
  margin-bottom: 8px;
  span {
    position: absolute;
    right: 16px;
    color: #165dff;
    cursor: pointer;
  }
}
.special-input {
  width: 360px;
  height: 40px;
}

.login-btn {
  height: 40px;
  background: #165dff;
  border-radius: 4px;
  color: #ffffff;
}

.disabled {
  color: #999999 !important;
}
:deep(.el-input-group__append, .el-input-group__prepend) {
  padding: 0;
}

.showImg {
  height: 40px;
}
</style>
<style lang="scss">
.el-input--large {
  --el-input-height: none;
}
.el-input {
  display: inline-block;
}
</style>
