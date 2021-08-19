<template>
  <div class="demo_icon">
    <div class="example_box">
      <h3>
        Icon 图标
        <a href="#icon-title">#</a>
      </h3>
      <p>提供了一套常用的图标合集</p>
    </div>
    <div class="example_box">
      <h3>
        Icon使用方法
        <a href="#icon-use">#</a>
      </h3>
      <div>直接通过设置元素类名<code class="code_inline">wm-icon-iconName</code>即可使用</div>
      <code-preview>
        <template #demo>
          <i class="wm-icon-plus"></i>
          <i class="wm-icon-edit"></i>
          <i class="wm-icon-delete"></i>
        </template>
        <template #code>
          <pre><code>{{ fontClassCode }}</code></pre>
        </template>
      </code-preview>
    </div>
    <div class="example_box">
      <h3>
        图标列表
        <a href="#icon-list">#</a>
      </h3>
      <div class="icon_list">
        <div v-for="icon in iconList" :key="icon">
          <wm-icon :class="icon" :spin="icon === 'loading'" />
          <div>wm-icon-{{ icon }}</div>
        </div>
      </div>
    </div>
    <!-- <div class="example_box">
      <h3>
        属性
        <a href="#icon-attribute">#</a>
      </h3>
      <common-table :columnConfig="columnConfig" :tableData="configData"> </common-table>
    </div> -->
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import iconData from './icon.json'
import { fontClassCode } from './code'

export default defineComponent({
  setup() {
    const iconList = ref(iconData)
    return {
      iconList,
      columnConfig: [
        {
          label: '参数',
          value: 'params',
          width: 150
        },
        {
          label: '说明',
          value: 'desc'
        },
        {
          label: '类型',
          value: 'type'
        },
        {
          label: '默认值',
          value: 'default',
          width: 150
        }
      ],
      configData: [
        // {
        //   id: '1',
        //   params: '',
        //   desc: '',
        //   type: '',
        //   default: '',
        // }
      ],
      fontClassCode
    }
  }
})
</script>

<style lang="scss" scoped>
.demo_icon {
  i {
    font-size: 20px;
    margin: 5px 15px;
  }
}
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