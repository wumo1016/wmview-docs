import CommonTable from './common-table/index.vue'
import CodePreview from './code-preview/index.vue'

const components = {
  CommonTable,
  CodePreview,
}

export default {
  install(app) {
    Object.keys(components).map(key => {
      const component = components[key]
      app.component(component.name || key, component)
    })
  },
}
