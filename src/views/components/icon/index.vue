<template>
  <div class="icon_wrapper">
    <div class="example_box">
      <h3>
        Icon 图标
        <a href="#icon-title">#</a>
      </h3>
      <p>提供了一套常用的图标合集</p>
    </div>
    <div class="example_box">
      <h3>
        图标列表
        <a href="#icon-list">#</a>
      </h3>
      <div class="icon_list">
        <div v-for="icon in iconList" :key="icon">
          <wm-icon :class="`wm-icon-${icon}`" :spin="icon === 'loading'" />
          <div>wm-icon-{{ icon }}</div>
        </div>
      </div>
    </div>
    <div class="example_box">
      <h3>
        属性
        <a href="#icon-attribute">#</a>
      </h3>
      <common-table :columnConfig="columnConfig"> </common-table>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import iconData from './icon.json'

export default defineComponent({
  setup() {
    const iconList = ref(iconData)
    return {
      iconList,
      columnConfig: [
        {
          label: '参数',
          width: 150,
        },
        {
          label: '说明',
        },
        {
          label: '类型',
        },
        {
          label: '可选值',
        },
        {
          label: '默认值',
          width: 150,
        },
      ],
    }
  },
})
</script>

<style lang="scss" scoped>
.icon_list {
  border-top: 1px solid $bcolor;
  border-left: 1px solid $bcolor;
  border-radius: 5px;
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  background: #fff;
  > div {
    width: 16.66%;
    border-bottom: 1px solid $bcolor;
    border-right: 1px solid $bcolor;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 16px 0;
    cursor: pointer;
    i {
      margin: 24px 0;
      font-size: 28px !important;
    }
    &:hover {
      color: $tcolor;
    }
  }
}
</style>