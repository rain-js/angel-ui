// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import demoBlock from './components/demo-block'
import AngelUI from '../packages'
import '../packages/theme-default/lib/index.css'
import icon from './icon.json'

Vue.component('demo-block', demoBlock)
Vue.use(AngelUI)

Vue.config.productionTip = false

Vue.prototype.$icon = icon

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
