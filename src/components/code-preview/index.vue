<template>
  <div class="code-preview">
    <div class="demo_box">
      <slot name="demo"></slot>
    </div>
    <div class="operate_box">
      <i class="wm-icon-copy" @click="handleCopy"></i>
      <div class="code_opreate" @click="changeSpread">
        <i :class="['wm-icon-arrow-down', { arrow_up: spread }]"></i>
        <span>{{ spread ? '隐藏代码' : '显示代码' }}</span>
      </div>
    </div>
    <div
      :class="['code_box', { code_border: spread }]"
      :style="{ height: `${height}px` }"
    >
      <div ref="refCodeContent" v-highlight>
        <slot name="code">
          <pre><code>{{ code }}</code></pre>
        </slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import { copyContent } from '@p/utils'

export default defineComponent({
  props: {
    showDesc: {
      type: Boolean,
      required: false,
      default: false
    },
    code: {
      type: String,
      required: false,
      default: ''
    }
  },
  setup(props) {
    const state = reactive({
      spread: false,
      height: 0,
      refCodeContent: null
    })

    const changeSpread = async () => {
      state.spread = !state.spread
      state.height = state.spread ? state.refCodeContent.offsetHeight : 0
    }

    const handleCopy = () => {
      copyContent(props.code)
      alert('复制成功')
    }

    return {
      ...toRefs(state),
      changeSpread,
      handleCopy
    }
  }
})
</script>

<style lang="scss" scoped>
.code-preview {
  border: 1px solid $bcolor;
  border-bottom: none;
  margin-top: 12px;
  background: #fff;
  .demo_box {
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
  .code_opreate {
    cursor: pointer;
    display: flex;
    align-items: center;
    &:hover {
      color: $tcolor;
    }
    user-select: none;
  }
  .operate_box {
    border-top: 1px solid $bcolor;
    border-bottom: 1px solid $bcolor;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 0;
    background-color: #f9fafc;
    i {
      cursor: pointer;
      margin: 0 10px;
      &:hover {
        color: $tcolor;
      }
    }
    .wm-icon-arrow-down {
      transition: all 0.2s;
    }
    .arrow_up {
      transform: rotate(180deg);
    }
  }
  .code_box {
    height: 200px;
    overflow: hidden;
    transition: height 0.2s;
  }
  .code_border {
    border-bottom: 1px solid $bcolor;
  }
}
</style>
