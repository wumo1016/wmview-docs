import CommonTable from './common-table/index.vue'

const components = {
  CommonTable,
}

export default {
  install(app) {
    Object.keys(components).map(key => {
      app.component(key, CommonTable)
    })
  },
}
