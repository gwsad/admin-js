import { computed } from "vue";
import { useGlobal } from "@pureadmin/utils";

export function useSetting() {
  const { $config } = useGlobal<GlobalPropertiesApi>();

  const dynamicRouter = computed(() => {
    return $config?.DynamicRouter ?? false;
  });

  return {
    dynamicRouter
  };
}
