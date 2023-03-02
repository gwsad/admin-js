<template>
  <div>
    <el-dialog :title="modelTitle" v-model="dialogFormVisible">
      <el-form ref="baseForm" :rules="baseRules" :model="modelData">
        <el-form-item
          v-for="item in modelForm"
          style="width: 100%"
          :key="item.props"
          :label="item.label"
          :label-width="100"
          :prop="item.props"
        >
          <el-input
            v-if="item.component === 'input'"
            v-model="modelData[item.props]"
            :placeholder="`请输入${item.label}`"
            type="text"
            v-bind="item.componentProps"
            @change="handleFormChange(item.props)"
          />
          <el-input
            v-if="item.component === 'inputArea'"
            v-model="modelData[item.props]"
            :placeholder="`请输入${item.label}`"
            type="textarea"
            v-bind="item.componentProps"
            @change="handleFormChange(item.props)"
          />
          <el-radio-group
            v-if="item.component === 'radio'"
            v-model="modelData[item.props]"
            v-bind="item.componentProps"
            @change="handleFormChange(item.props)"
          >
            <el-radio
              v-for="radioItem in item.options"
              :label="radioItem.value"
              :key="radioItem.label"
              >{{ radioItem.label }}</el-radio
            >
          </el-radio-group>
          <el-select
            @change="handleFormChange(item.props)"
            :multiple="item.multiple"
            v-if="item.component === 'select'"
            v-model="modelData[item.props]"
            v-bind="item.componentProps"
          >
            <el-option
              v-for="selectItem in item.options"
              :key="selectItem.value"
              :label="selectItem.label"
              :value="selectItem.value"
            />
          </el-select>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="cancel">取 消</el-button>
          <el-button type="primary" @click="submitModel(baseForm)"
            >确 定</el-button
          >
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, watch, ref, reactive, onMounted } from "vue";
import type { FormInstance, FormRules } from "element-plus";

export default defineComponent({
  name: "SrmModelForm",
  props: {
    modelTitle: { type: String },
    show: { type: Boolean, default: false },
    modelForm: {
      type: Array,
      default: () => []
    }
  },
  emits: ["submit", "cancel", "handleFormChange", "close"],
  setup(props, { emit }) {
    const dialogFormVisible = ref<boolean>(true);
    const modelData = reactive<any>({});
    const baseRules = reactive<FormRules>({});
    const baseForm = ref<FormInstance>();

    const submitModel = async (formEl: FormInstance | undefined) => {
      if (!formEl) return;
      await formEl.validate(valid => {
        if (valid) {
          emit("submit", modelData);
        }
      });
    };
    function cancel() {
      emit("cancel");
    }

    function handleFormChange(field) {
      emit("handleFormChange", modelData[field], field);
    }
    watch(
      () => props.show,
      val => {
        dialogFormVisible.value = val;
      }
    );
    watch(
      () => dialogFormVisible.value,
      val => {
        if (val === false) {
          emit("cancel");
        }
      }
    );
    onMounted(() => {
      props.modelForm.forEach((item: any) => {
        baseRules[item.props] = [
          {
            required: item.required ?? false,
            message: `请输入${item.label}`,
            trigger: "blur"
          }
        ];
        if (!props.modelTitle.includes("新建")) {
          modelData[item.props] = item.value;
        } else {
          modelData[item.props] =
            item.defaultValue !== undefined ? item.defaultValue : "";
        }
      });
    });
    return {
      handleFormChange,
      dialogFormVisible,
      submitModel,
      cancel,
      close,
      modelData,
      baseRules,
      baseForm
    };
  }
});
</script>

<style></style>
