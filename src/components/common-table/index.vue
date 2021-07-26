<template>
  <div class="common_table_wrapper">
    <table>
      <th v-for="item in columnConfig" :key="item.label">
        {{ item.label }}
      </th>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    columnConfig: {
      type: Array,
      required: true,
    },
    data: {
      type: Array,
      required: true,
    },
  },
  setup() {
    return {}
  },
})
</script>

<style scoped>
</style>