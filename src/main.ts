import { createApp } from 'vue'
import App from './app.vue'
import router from '@r'

import WmView from 'wmview'

import '@sty/index.scss'
import directives from './directives'

const app = createApp(App)

Object.keys(directives).forEach(key => {
  app.directive(key, directives[key])
})

app.use(WmView)
app.use(router)
app.mount('#app')
