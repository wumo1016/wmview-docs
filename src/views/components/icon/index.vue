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
      <common-table>
        
      </common-table>
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
    }
  },
})
</script>

<style lang="scss" scoped>
.example_box {
  color: rgb(92, 91, 91);
  padding-bottom: 20px;
  h3 {
    color: #000;
    font-size: 1.3rem;
    a {
      opacity: 0;
      color: $tcolor;
    }
    &:hover {
      a {
        opacity: 1;
      }
    }
  }
  p {
    margin: 20px 0;
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
      padding: 1.2rem 0;
      cursor: pointer;
      i {
        margin: 1.6rem 0;
        font-size: 2.2rem !important;
      }
      &:hover {
        color: $tcolor;
      }
    }
  }
}
</style>