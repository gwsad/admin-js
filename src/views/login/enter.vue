<script setup lang="ts">
import Motion from "./utils/motion";
import { message } from "@/utils/message";
import { useRouter } from "vue-router";
import { loginRules } from "./utils/rule";
import { initRouter } from "@/router/utils";
import { useNav } from "@/layout/hooks/useNav";
import type { FormInstance } from "element-plus";
import { useLayout } from "@/layout/hooks/useLayout";
import { useUserStoreHook } from "@/store/modules/user";
import { avatar } from "./utils/static";
import { useRenderIcon } from "@/components/ReIcon/src/hooks";
import { ref, reactive, onMounted, onBeforeUnmount, onBeforeMount } from "vue";
import { useDataThemeChange } from "@/layout/hooks/useDataThemeChange";
import { MathUUid } from "@/utils/index";
import { getImgCode } from "@/api/user";
import dayIcon from "@/assets/svg/day.svg?component";
import darkIcon from "@/assets/svg/dark.svg?component";
import Lock from "@iconify-icons/ri/lock-fill";
import User from "@iconify-icons/ri/user-3-fill";
import bg from "@/assets/login/bg.png";

defineOptions({
  name: "Login"
});
const loading = ref(false);
const ruleFormRef = ref<FormInstance>();
const router = useRouter();
const { initStorage } = useLayout();
initStorage();

const { dataTheme, dataThemeChange } = useDataThemeChange();
dataThemeChange();
const { title } = useNav();

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
      showImgCode.value === true &&
        Object.assign(ruleForm, {
          validCode: imgCode.value,
          deviceId: deviceId.value
        });
      useUserStoreHook()
        .loginByUsername(ruleForm)
        .then(res => {
          if (res["resp_code"] === 0) {
            window.localStorage.setItem(
              "userLogin",
              JSON.stringify({
                mobile: ruleForm.mobile,
                password: ruleForm.password
              })
            );
            // 获取后端路由
            // initRouter().then(() => {
            //   router.push("/");
            //   message("登录成功", { type: "success" });
            // });
            router.push("/");
            message("登录成功", { type: "success" });
          }
        })
        .catch(e => {
          if (["3011", "3006", "3007"].includes(e.resp_code)) {
            showImgCode.value = true;
            getImageCode();
          } else {
            message(e.resp_msg, { type: "error" });
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

onBeforeMount(() => {
  ruleForm.mobile =
    JSON.parse(window.localStorage.getItem("userLogin") || "{}").mobile || "";
  ruleForm.password =
    JSON.parse(window.localStorage.getItem("userLogin") || "{}").password || "";
});

onMounted(() => {
  window.document.addEventListener("keypress", onkeypress);
});

onBeforeUnmount(() => {
  window.document.removeEventListener("keypress", onkeypress);
});
</script>

<template>
  <div class="select-none">
    <div class="flex-c absolute right-5 top-3">
      <!-- 主题 -->
      <el-switch
        v-model="dataTheme"
        inline-prompt
        :active-icon="dayIcon"
        :inactive-icon="darkIcon"
        @change="dataThemeChange"
      />
    </div>
    <div class="login-container">
      <el-image class="login-bg" :src="bg" fit="cover" />
      <div class="login-box">
        <div class="login-form">
          <avatar class="avatar" />
          <Motion>
            <h2 class="outline-none">{{ title }}</h2>
          </Motion>

          <el-form
            ref="ruleFormRef"
            :model="ruleForm"
            :rules="loginRules"
            size="large"
          >
            <Motion :delay="100">
              <el-form-item
                :rules="[
                  {
                    required: true,
                    message: '请输入账号',
                    trigger: 'blur'
                  }
                ]"
                prop="mobile"
              >
                <el-input
                  clearable
                  v-model="ruleForm.mobile"
                  placeholder="账号"
                  :prefix-icon="useRenderIcon(User)"
                />
              </el-form-item>
            </Motion>

            <Motion :delay="150">
              <el-form-item prop="password">
                <el-input
                  clearable
                  show-password
                  v-model="ruleForm.password"
                  placeholder="密码"
                  :prefix-icon="useRenderIcon(Lock)"
                />
              </el-form-item>
            </Motion>
            <!-- 验证码 -->
            <div class="verification" :class="{ showImg: showImgCode }">
              <el-input v-model="imgCode" placeholder="请输入验证码" />
              <img
                v-show="imgCodeUrl"
                :src="imgCodeUrl"
                @click="getImageCode()"
              />
            </div>

            <Motion :delay="350">
              <el-button
                class="w-full mt-4"
                size="default"
                type="primary"
                :loading="loading"
                @click="onLogin(ruleFormRef)"
              >
                登录
              </el-button>
            </Motion>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url("@/style/login.css");
</style>

<style lang="scss" scoped>
:deep(.el-input-group__append, .el-input-group__prepend) {
  padding: 0;
}

.verification {
  height: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.2s linear;
  overflow: hidden;

  img {
    width: 100px;
    height: 100%;
    cursor: pointer;
  }
}

.showImg {
  height: 40px;
}
</style>
<style lang="scss">
.verification {
  .el-input {
    width: 162px;
    margin-right: 8px;
    height: 100%;
  }

  .el-input__inner {
    height: 100%;
    background: none;
  }
}
</style>
