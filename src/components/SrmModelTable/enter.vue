<template>
  <div>
    <el-dialog :title="modelTitle" v-model="dialogFormVisible" @close="close">
      <SrmTable
        :columns="tableConfig"
        @editRow="editRow"
        :reqData="reqData"
        :api="api"
        :sourceData="sourceData"
      />
      <el-dialog
        width="30%"
        :title="innerTitle"
        v-model="innerVisible"
        append-to-body
      >
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
            <el-date-picker
              v-if="item.component === 'date'"
              v-model="modelData[item.props]"
              type="date"
              :placeholder="`请选择${item.label}`"
              v-bind="item.componentProps"
            />
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
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, watch, ref, reactive, onMounted } from "vue";
import type { FormInstance, FormRules } from "element-plus";
import SrmTable from "@/components/SrmTable/enter.vue";

export default defineComponent({
  name: "SrmModelTable",
  components: { SrmTable },
  props: {
    modelTitle: { type: String },
    innerTitle: { type: String },
    show: { type: Boolean, default: false },
    tableConfig: {
      type: Array,
      default: () => []
    },
    sourceData: {
      type: Array,
      default: () => []
    },
    reqData: {
      type: Object,
      default: () => {}
    },
    modelForm: {
      type: Array,
      default: () => []
    },
    api: {
      type: String
    }
  },
  emits: ["submit", "cancel", "handleFormChange", "editRow", "close"],
  setup(props, { emit }) {
    const dialogFormVisible = ref<boolean>(true);
    const innerVisible = ref<boolean>(false);
    const modelData = reactive<any>({});
    const baseRules = reactive<FormRules>({});
    const baseForm = ref<FormInstance>();

    const submitModel = async (formEl: FormInstance | undefined) => {
      if (!formEl) return;
      await formEl.validate(valid => {
        if (valid) {
          emit("submit", modelData);
          innerVisible.value = false;
        }
      });
    };
    function cancel() {
      innerVisible.value = false;
      emit("cancel");
    }
    function close() {
      emit("close");
    }
    function handleFormChange(field) {
      emit("handleFormChange", modelData[field], field);
    }
    function editRow(row) {
      innerVisible.value = true;
      emit("editRow", row);
    }
    onMounted(() => {
      props.modelForm.forEach((item: any) => {
        baseRules[item.props] = [
          {
            required: item.required ?? false,
            message: `请输入${item.label}`,
            trigger: "blur"
          }
        ];
        if (props.modelTitle !== "新建") {
          modelData[item.props] = item.value;
        } else {
          modelData[item.props] =
            item.defaultValue !== undefined ? item.defaultValue : "";
        }
      });
    });
    watch(
      () => props.show,
      val => {
        dialogFormVisible.value = val;
      }
    );
    return {
      handleFormChange,
      dialogFormVisible,
      innerVisible,
      submitModel,
      cancel,
      close,
      editRow,
      modelData,
      baseRules,
      baseForm
    };
  }
});
</script>

<style></style>
