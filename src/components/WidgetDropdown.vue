<template>
  <select :id="currentId" v-model="value">
    <option v-if="data.defaultOption && !useStringValue" :value="useStringValue ? '' : -1" selected disabled>Select...</option>
    <option v-for="[i, value] of data.options.entries()" :value="useStringValue ? value : i" :key="i">{{ value }}</option>
  </select>
</template>

<script setup lang="ts">
import { useWidgetsStore } from "@/common/stores";
import { Widget, WidgetDropdown } from "@/config";

const props = defineProps<{
  data: Widget & WidgetDropdown,
  currentId: string
}>();
const useStringValue = props.data.stringValues;

const value = $ref(useStringValue ? props.data.defaultOption ? props.data.defualtValue : "": props.data.defaultOption ? -1 : 0);
defineExpose({ index: useWidgetsStore().addWidgetValue(props.data, $$(value)) });
</script>
