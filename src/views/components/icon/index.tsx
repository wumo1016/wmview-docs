import { defineComponent } from 'vue'
import iconData from './icon.json'
import { fontClassCode, wmIconCode, columnConfig, tableData } from './data'
import './index.scss'

export default defineComponent({
  setup() {
    return () => {
      return (
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
            <div>
              直接通过设置元素类名
              <code class="code_inline">wm-icon-iconName</code>
              即可使用
            </div>
            <code-preview
              code={fontClassCode}
              v-slots={{
                demo: () => (
                  <>
                    <i class="wm-icon-plus"></i>
                    <i class="wm-icon-edit"></i>
                    <i class="wm-icon-delete"></i>
                  </>
                )
              }}
            />
          </div>
          <div class="example_box">
            <h3>
              通过wm-icon使用
              <a href="#icon-use">#</a>
            </h3>
            <code-preview
              code={wmIconCode}
              v-slots={{
                demo: () => (
                  <>
                    <wm-icon class="plus" size="20"></wm-icon>
                    <wm-icon class="edit" color="#1890ff" size="20"></wm-icon>
                    <wm-icon class="delete" tag="span" size="20"></wm-icon>
                    <wm-icon class="loading" size="20" spin></wm-icon>
                  </>
                )
              }}
            />
          </div>
          <div class="example_box">
            <h3>
              图标列表
              <a href="#icon-list">#</a>
            </h3>
            <div class="icon_list">
              {iconData.map(icon => (
                <div>
                  <wm-icon class={icon} spin={icon === 'loading'} />
                  <div style="padding: 0 10px;text-align: center;">
                    wm-icon-{icon}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div class="example_box">
            <h3>
              wm-icon属性
              <a href="#icon-attr">#</a>
            </h3>
            <common-table columnConfig={columnConfig} tableData={tableData} />
          </div>
        </div>
      )
    }
  }
})
