<script lang="ts" setup>
import { reactive, ref, onBeforeMount, nextTick } from "vue";
import { ElMessage, ElMessageBox } from "element-plus";
import { TableConfig } from "./config/table";
import { SearchForm } from "./config/filter";
import { getCardType, getCardList, setHot } from "@/api/user";
const tableConfig: any = TableConfig;
const searchForm: any = SearchForm;
const sourceData: any = ref([]);
const reqData: any = ref({}); // 请求参数
const form: any = reactive({}); // 筛选项
const dialogVisible = ref(false); // 卡片设置弹窗
const total = ref(0); // 总条数
onBeforeMount(() => {
  getCardTypeListFn();
});

const activeName = ref(0);
const classification = ref([]);
// 获取卡片分类列表
const getCardTypeListFn = async () => {
  classification.value = [];
  const res = await getCardType();
  activeName.value = res.data[0]._id;
  res.data.map(item => {
    classification.value.push({ value: item._id, label: item.name });
  });
  getCardListFn();
};
// 获取卡片列表
const getCardListFn = async () => {
  const { data } = await getCardList(activeName.value, reqData.value);
  sourceData.value = data;
};

const cardInfo = ref({
  name: "",
  icon: "",
  price: "",
  discount: "",
  facevalue: [],
  imageUrl: ""
}); // 卡片信息

// 切换tab
const onHandleClick = value => {
  activeName.value = value.props.name;
};

const onCurrentChange = type => {
  console.log("type", type);
};

// 筛选项发生改变
function onSearch(data: any) {
  reqData.value = JSON.stringify(data) === "{}" ? {} : data;
  getCardListFn();
}

// 修改卡片是否热门
const onChangeHot = (data: any) => {
  console.log("data", data);
  ElMessageBox.confirm("确认修改该卡片是否热门吗？", { type: "warning" })
    .then(() => {
      console.log("修改成功");
    })
    .catch(() => {
      console.log("取消修改");
    });
};

// 打开卡片弹窗
const optionDialog = () => {
  dynamicTags.value = [];
  dialogVisible.value = true;
};

// 删除卡片
const onDelete = (data: any) => {
  console.log("data", data);
  ElMessageBox.confirm("确认删除该卡片吗？", { type: "warning" })
    .then(() => {
      console.log("删除成功");
    })
    .catch(() => {
      console.log("取消删除");
    });
};

// 确认添加卡片
const onAddCard = () => {
  console.log("cardInfo", cardInfo.value);
  if (!cardInfo.value.name) {
    ElMessage.error("请输入卡片名称");
    return;
  }
  if (!cardInfo.value.price) {
    ElMessage.error("请输入卡片价格");
    return;
  }
  if (!cardInfo.value.discount) {
    ElMessage.error("请输入卡片折扣");
    return;
  }
  if (!cardInfo.value.facevalue.length) {
    ElMessage.error("请输入卡片面值");
    return;
  }
  dialogVisible.value = false;
};

// 成功上传卡片
const handleAvatarSuccess = (res: any, file: any) => {
  console.log("res", res);
  console.log("file", file);
  cardInfo.value.icon = res.data;
};

//
const inputValue = ref("");
const dynamicTags = ref([]);
const inputVisible = ref(false);
const InputRef = ref<InstanceType<typeof ElInput>>();
const handleClose = (tag: string) => {
  dynamicTags.value.splice(dynamicTags.value.indexOf(tag), 1);
};

const showInput = () => {
  inputVisible.value = true;
  nextTick(() => {
    InputRef.value!.input!.focus();
  });
};

const handleInputConfirm = () => {
  if (inputValue.value) {
    dynamicTags.value.push(inputValue.value);
  }
  inputVisible.value = false;
  inputValue.value = "";
};

const onHot = (data: any) => {
  ElMessageBox.confirm(`确认${data.isHot === 1 ? "取消" : "上"}热门吗？`, {
    type: "warning"
  })
    .then(async () => {
      const _data = {
        name: data.name,
        image: data.image,
        discount: data.discount,
        order: data.order,
        isHot: data.isHot === 1 ? 0 : 1,
        isDelete: data.isDelete
      };
      await setHot(data._id, _data);
      getCardListFn();
    })
    .catch(() => {
      console.log("取消修改");
    });
};
</script>

<template>
  <div class="bs">
    <div class="flex justify-center mb-10">
      <el-tabs
        v-if="classification.length !== 0"
        v-model="activeName"
        class="demo-tabs mb-10"
        @tab-click="onHandleClick"
      >
        <el-tab-pane
          v-for="item in classification"
          :key="item.value"
          :label="item.label"
          :name="item.value"
        />
      </el-tabs>
    </div>
    <el-button class="mb-20" type="primary" @click="optionDialog"
      >新增</el-button
    >

    <!-- <div>
      <SrmFilter
        :items="searchForm"
        :search-params="form"
        @search="onSearch"
        @reset="onSearch"
      />
    </div> -->
    <SrmTable
      :columns="tableConfig"
      :sourceData="sourceData"
      :reqData="reqData"
      @onDelete="onDelete"
      @onHot="onHot"
      @onChangeHot="onChangeHot"
      @currentChange="onCurrentChange"
    />
    <el-dialog
      v-if="dialogVisible"
      v-model="dialogVisible"
      title="新增卡片"
      width="50%"
    >
      <el-form :model="cardInfo" label-width="100px">
        <el-form-item label="卡片名称：">
          <el-input v-model="cardInfo.name" placeholder="请输入卡片名称" />
        </el-form-item>
        <el-form-item label="卡片价格：">
          <el-input
            v-model="cardInfo.price"
            type="number"
            placeholder="请输入卡片价格"
          />
        </el-form-item>
        <el-form-item label="卡片折扣：">
          <el-input
            v-model="cardInfo.discount"
            type="number"
            placeholder="请输入卡片折扣"
          />
        </el-form-item>
        <el-form-item label="卡片面值：">
          <el-tag
            v-for="tag in dynamicTags"
            :key="tag"
            class="mx-1"
            closable
            :disable-transitions="false"
            @close="handleClose(tag)"
          >
            {{ tag }}
          </el-tag>
          <el-input
            v-if="inputVisible"
            ref="InputRef"
            v-model="inputValue"
            class="ml-1 w-10"
            size="small"
            @keyup.enter="handleInputConfirm"
            @blur="handleInputConfirm"
          />
          <el-button
            v-else
            class="button-new-tag ml-1"
            size="small"
            @click="showInput"
          >
            + New Tag
          </el-button>
        </el-form-item>
        <el-form-item label="卡片ICON：">
          <el-upload
            class="avatar-uploader"
            action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
          >
            <img
              v-if="cardInfo.imageUrl"
              :src="cardInfo.imageUrl"
              class="avatar"
            />
            <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
          </el-upload>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="onAddCard"> 确认 </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>
<style scoped>
.avatar-uploader .avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
<style lang="scss">
.avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}
</style>
