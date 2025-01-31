<template>

<div id="controls-container">
    <RouterLink :to="{ name: 'home' }" style="margin-right: 40px;">Home</RouterLink>
</div>
<div >
  <h1 class="page-heading">Settings</h1>
  <div class="grid">
    <div class="label" >
      <label for="select-robot-input">Scouting Position</label>
    </div>
    <div >
      <select id="select-robot-input" v-model.number="settings.team">
        <option value="0">Red 1</option>
        <option value="1">Red 2</option>
        <option value="2">Red 3</option>
        <option value="3">Blue 1</option>
        <option value="4">Blue 2</option>
        <option value="5">Blue 3</option>
      </select>
    </div>
    <div >
      <input type="checkbox" id="flip-field" v-model="settings.flipField">
      <label for="flip-field"> Flip Field Image</label>
    </div>
    <div >
      <select id="select-alliance-input" v-model.number="settings.alliance">
        <option value="Red">Red</option>
        <option value="Blue">Blue</option>
      </select>
    </div>
  </div>
</div>

  
        
  </template>
  
  <script setup lang="ts">
    
    import { get, isEmpty } from "lodash";
    import { getError, getTeamName, isFailed, TBAData } from "@/common/tba";
    import { LabelType } from "@/common/shared";
    import { computed, Ref } from "vue";
    import { useConfigStore, useTBAStore, useWidgetsStore, useSettingsStore } from "@/common/stores";

    const robot = $ref(0);

    const settings = useSettingsStore();

    
  </script>
  
  <style>
  .grid {
    display: grid;
    gap: 12px;
  }
  

    .label {
      justify-self: right;
      user-select: none;
    }

  </style>
  