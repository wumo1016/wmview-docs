<template>
  <div class="common_table_wrapper">
    <table>
      <thead>
        <th
          v-for="item in columnConfig"
          :key="item.label"
          :style="{ width: item.width ? `${item.width}px` : '' }"
        >
          {{ item.label }}
        </th>
      </thead>
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

<style lang="scss" scoped>
.common_table_wrapper {
  border: 1px solid rgba(202, 202, 202, 0.5);
  border-radius: 4px;
  table {
    width: 100%;
    border-collapse: collapse;
  }
  thead {
    width: 100%;
    line-height: 40px;
    background: rgb(209, 209, 209);
  }
}
</style>