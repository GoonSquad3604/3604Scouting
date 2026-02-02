<template>
  <label v-for="[i, name] of data.options.entries()" :key="useStringValue ? name : i">
    <input type="checkbox" v-model="value" :value="useStringValue ? name : i" />{{ name }}<br />
  </label>
</template>

<script setup lang="ts">
import { useWidgetsStore } from "@/common/stores";
import { Widget, WidgetMultiCheckbox } from "@/config";

const props = defineProps<{
  data: Widget & WidgetMultiCheckbox,
  currentId: string
}>();
const useStringValue = props.data.stringValues;
const value = $ref([]);
defineExpose({ index: useWidgetsStore().addWidgetValue(props.data, $$(value)) });
</script>

<style>

</style>