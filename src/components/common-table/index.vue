<template>
  <div class="common_table_wrapper">
    <table>
      <thead>
        <th
          v-for="item in columnConfig"
          :key="item.value"
          :style="{ width: item.width ? `${item.width}px` : '' }"
        >
          {{ item.label }}
        </th>
      </thead>
      <tbody>
        <tr v-for="(r, i) in tableData" :key="i">
          <td v-for="c in columnConfig" :key="c.value">
            {{ r[c['value']] }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    columnConfig: {
      type: Array,
      required: true
    },
    tableData: {
      type: Array,
      required: true
    }
  },
  setup() {
    return {}
  }
})
</script>

<style lang="scss" scoped>
.common_table_wrapper {
  border: 1px solid rgba(238, 237, 237, 1);
  border-radius: 4px;
  table {
    width: 100%;
    border-collapse: collapse;
  }
  thead {
    width: 100%;
    line-height: 40px;
    background: rgba(238, 237, 237, 0.6);
  }
  tbody {
    tr {
      &:not(:last-child) {
        border-bottom: 1px solid rgba(238, 237, 237, 1);
      }
    }
  }
  tr {
    line-height: 36px;
    text-align: center;
    background: #fff;
  }
}
</style>