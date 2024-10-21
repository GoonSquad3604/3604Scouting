<template>
    <div id="settings-container">
      <Suspense>
        <template #default>
          <SettingsPage />
        </template>
        <template #fallback>Loading...</template>
      </Suspense>
    </div>
  </template>
  
  <script setup lang="ts">
import SettingsPage from "@/components/SettingsPage.vue";
  </script>
  
  <style>
  #settings-container {
    display: grid;
    justify-content: center;
  }
  </style>
  