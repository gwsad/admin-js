<template>
  <div class="page-title">
    {{ route.meta.title }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRoute } from "vue-router";
export default defineComponent({
  name: "PageTitle",
  setup() {
    const route = useRoute();

    return {
      route
    };
  }
});
</script>

<style lang="scss" scoped>
.page-title {
  height: 42px;
  line-height: 42px;
  padding: 0 15px;
  border-bottom: 1px solid #f6f6f6;
  color: #333;
  border-radius: 2px 2px 0 0;
  font-size: 16px;
}
</style>
