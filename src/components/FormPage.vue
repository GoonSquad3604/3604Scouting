<template>
  <div v-show="show">
    <h1 class="page-heading">{{ config.data.heading ?? "Scouting" }}</h1>
    <h3 v-if="teamDesc?.length > 0" :class="setAllianceColor()" class="page-heading">{{ config.data.wholeAlliance ? allianceDisplay : teamDisplay }}</h3>
    <img v-if="config.data.logo" :src="absoluteLogoPath" alt="Cannot load logo file" class="center" />
    <h2 class="page-heading">{{ title }}</h2>
    <div class="grid">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useConfigStore, useWidgetsStore } from "@/common/stores";

const props = defineProps<{
  title: string
}>();

const config = useConfigStore();
const widgets = useWidgetsStore();

const teamDesc = $computed(() => widgets.values.find(i => i.name == "Team")?.value);
const matchNum = $computed(() => widgets.values.find(i => i.name == "MatchNumber")?.value);

const teamDisplay = $computed(() => 'Team: ' + teamDesc.split(',')[2] + ' ' + teamDesc.split(',')[3] + ' - Pos: ' + teamDesc.split(',')[0]+ teamDesc.split(',')[1] + ' - Match: '+ matchNum);
const allianceDisplay = $computed(() => 'Alliance: ' + teamDesc.split(',')[0]);
// Get the full path to the logo image
const absoluteLogoPath = $computed(() => `${import.meta.env.BASE_URL}assets/${config.data.logo}`);

let show = $ref(false);

widgets.lastWidgetRowEnd = 1;

// Expose page data
defineExpose({ title: props.title, setShown: (value: boolean) => show = value });

function setAllianceColor(){
  const color = teamDesc.split(',')[0];
  if(color == 'Red'){
    return 'redAlliance';
  } else {
    return 'blueAlliance';
  }
}
</script>

<style>
.grid {
  display: grid;
  align-items: center;
  gap: 12px;
}

.center {
  margin-left: auto;
  margin-right: auto;
}

.page-heading {
  text-align: center;
}

.redAlliance {
  color: red;
}

.blueAlliance { 
  color: blue;
}
</style>
