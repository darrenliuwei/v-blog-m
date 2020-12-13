import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import marked from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/monokai-sublime.css'
import moment from 'moment'
import 'vant/lib/index.css'
import { Divider, Progress, Button, Pagination, Tabbar, TabbarItem } from 'vant'

Vue.use(Divider)
Vue.use(Progress)
Vue.use(Button)
Vue.use(Pagination)
Vue.use(Tabbar)
Vue.use(TabbarItem)

marked.setOptions({
  renderer: marked.Renderer(),
  gfm: true,
  pedantic: false,
  tables: true,
  breaks: true,
  smartLists: true,
  smartypants: false,
  highlight: function(code) {
    return hljs.highlightAuto(code).value
  }
})
moment.locale('zh-cn')

Vue.prototype.$moment = moment
Vue.prototype.$marked = marked
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
