<template>
  <div id="controls-container">
    <RouterLink :to="{ name: 'home' }" style="margin-right: 40px;">Home</RouterLink>
    <span v-if="widgets.savedData.size === 0">&lt;No Entries&gt;</span>
    <template v-else>
      <label for="entry-select">Entry</label>
      <select id="entry-select" v-model.number="selectedIdx">
        <option v-for="[i, name] of entries.entries()" :key="i" :value="i">{{ name }}</option>
      </select>
      <button @click="deleteData">Delete</button>
      <button @click="downloadData">Download</button>
      <button @click="clearData">Clear All</button>
      <button v-if="oneSelectedRecord" @click="genQRCode">Gen QRCode</button>
    </template>
  </div>
  <div class="table-container">
    <span v-if="selectedEntry === undefined">No Data</span>
    <InspectorTable v-else v-model="selectedRecords" :data="selectedEntry" />
  </div>
  <a :hidden="true" :download="entries[selectedIdx]" ref="downloadLink"></a>

  <dialog ref="qrContainer">
    <div id="qr-dialog-contents">
      <button id="qr-dialog-close" @click="qrContainer?.close">Close</button>
      <div>
        <!-- <input type="checkbox" v-model="excludeHeaders" id="exclude-headers" /> -->
        <!-- <label for="exclude-headers">Exclude headers in code</label> -->
      </div>
      <qrcode-vue :value="qrData" level="M" render-as="svg" :size="350" />
    </div>
  </dialog>
</template>

<script setup lang="ts">
import InspectorTable from "./InspectorTable.vue";
import { useWidgetsStore } from "@/common/stores";
import QrcodeVue from "qrcode.vue";



const widgets = useWidgetsStore();
let selectedIdx = $ref(0); // The index of the entry selected in the combobox

const downloadLink = $ref<HTMLAnchorElement>();
  const qrContainer = $ref<HTMLDialogElement>();

const selectedRecords = $ref(new Set<number>());
const hasSelectedRecords = $computed(() => selectedRecords.size > 0);
const oneSelectedRecord = $computed(() => selectedRecords.size == 1)

const entries = $computed(() => [...widgets.savedData.keys()]); // The entries in local storage
const selectedEntry = $computed(() => widgets.savedData.get(entries[selectedIdx])); // The selected entry

// Filters records in the selected entry based on the user selection.
// If there are no records selected, the filter directly uses the given state, returning either all or no records.
const filterRecords = (state: boolean) => (selectedEntry === undefined)
  ? []
  : selectedEntry.values.filter((_v, i) => hasSelectedRecords ? (selectedRecords.has(i) === state) : state);

  const qrData = $computed(() => oneSelectedRecord ? toCSVString(filterRecords(true)[0]): '');
function deleteData() {
  if (selectedEntry === undefined) return;

  if (!confirm(`Delete ${hasSelectedRecords ? "the selected" : "all"} records in this entry permanently?`)) return;

  // Discard out the selected records
  // If there are none selected, they are all deleted
  selectedEntry.values = filterRecords(false);

  selectedRecords.clear();
}

function downloadData() {
  if (selectedEntry === undefined) return;
  if (downloadLink === undefined) return; // Make sure the link exists

  // Generate the download link for the selected records, then trigger the download
  // If there are no records selected, they will all be included in the generated file
  downloadLink.href = widgets.makeDownloadLink({ header: selectedEntry.header, values: filterRecords(true) });
  downloadLink.click();
}

function clearData() {
  if (!confirm("Clear all saved entries in local storage permanently?")) return;

  widgets.savedData.clear();
  selectedIdx = 0; // Reset selected index
}

function genQRCode() {
  var selectRecords = filterRecords(true);
  console.log(qrData);
  qrContainer?.showModal();

}

function toCSVString(data: string[]): string {
    // Transforms an array of strings into valid CSV by escaping quotes, then joining each value.
    // https://en.wikipedia.org/wiki/Comma-separated_values
    const escape = (s: string) => `"${s.replaceAll('"', '""')}"`;

    // Escape the header and list of records, then put them together into a blob for downloading
    const records = data.map(escape);
    
    return records.join();
  }

</script>

<style>
.table-container {
  overflow: auto;
}

#controls-container>* {
  margin: 4px;
}
</style>
