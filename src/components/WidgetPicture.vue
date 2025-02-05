<template>
  <img :src="absolutePath"  :alt="`Could not load file assets/${data.file}`" :width="data.width" :height="data.height" />
</template>

<script setup lang="ts">
import { useSettingsStore } from "@/common/stores";
import { Widget, WidgetPicture } from "@/config";

const settings = useSettingsStore();
const props = defineProps<{
  data: Widget & WidgetPicture,
  currentId: string
}>();

// Get the full path to the file
const absolutePath = $computed(() => settings.flipField && props.data.changeImageOnFlip ? `${import.meta.env.BASE_URL}assets/${props.data.flipImage}` : `${import.meta.env.BASE_URL}assets/${props.data.file}`);
const flipField = $ref(settings.flipField);

</script>

<style>
.rotated {
  transform: rotate(180deg); /* Equal to rotateZ(45deg) */
}
</style>
