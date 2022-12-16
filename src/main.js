import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'

// for vue2-faui-user-fe
import fbinit from 'vue2-faui-user-fe/fbinitCDN'
import initialize from 'vue2-faui-user-fe/initializeCDN'

Vue.config.productionTip = false

fbinit.fbinit()

// login accounts
Vue.mixin({
  computed: {
  ...initialize.accountinit(),
  }
})

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
