<template>
  <div class="counter-div">
    {{ value }}
  </div>
  <div class="button-div">
    <button v-for="[i, inc] of data.intervals?.entries()" :key="i" @click="increment(inc)" :style="buttonColorStyle" class="counter-btn">+{{ inc }}</button>
  </div>
  <div v-if="data.showNegatives">
    <button v-for="[i, inc] of data.intervals?.entries()" :key="i" @click="increment(-inc)" :style="buttonColorStyle" class="counter-btn">-{{ inc }}</button>
  </div>
  
</template>

<script setup lang="ts">
import { clamp, inRange } from "lodash";
import { useWidgetsStore } from "@/common/stores";
import { Widget, WidgetMultiCounter } from "@/config";

const props = defineProps<{
  data: Widget & WidgetMultiCounter,
  currentId: string
}>();


// Style object to set button background color
const buttonColorStyle = $computed(() => ({ backgroundColor: props.data.buttonColor, color: props.data.buttonTextColor }));

let value = $ref(0);
defineExpose({ index: useWidgetsStore().addWidgetValue(props.data, $$(value)) });

// Updates the value of the widget.
const increment = (increment: number) => value = clamp(value + increment, 0, Infinity);
</script>

<style lang="postcss">
.counter {
  text-align: center;
  width: 4em;
  font-size: 24px;
  appearance: textfield;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
}

.counter-div{
  justify-content: center;
  justify-self: center;
  display: flex;
  place-items: center;
  margin: auto;
  width: 4ch;
  height: 4ch;
  background-color: black;
  color: white;
  font-size: 48px;
  margin-bottom: 1ch;
  border-radius: 20%;
}

.button-div{
  margin-bottom: 2ch;
  margin-top: 2ch;
}
.counter-btn {
  width: 6ch;
  height: 6ch;
  padding: 0;
  font-size: large;
  font-weight: bold;
  margin-left: 1ch;
  margin-right: 1ch;
  border-radius: 20%;
  
}
</style>
