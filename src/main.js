import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import store from './store/store'

//require('./store/modules/headers')
import './plugins/axios'

Vue.config.productionTip = false

//store.dispatch('auth/atemp', localStorage.getItem('token')).then(() => {})

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
