import { createApp } from 'vue'
import App from './app.vue'
import router from '@r'

// @ts-ignore
import WmView from 'wmview'
import 'wmview/dist/styles/index.css'

import '@sty/index.scss'

// 全局api
import directives from './directives'
import components from '@/components'

const app = createApp(App)

Object.keys(directives).forEach(key => {
  app.directive(key, directives[key])
})

app.use(WmView)
app.use(components)
app.use(router)
app.mount('#app')
