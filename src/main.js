import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'

// for vue2-faui-user-fe
import fbinit from 'vue2-faui-user-fe/fbinit'
import initialize from 'vue2-faui-user-fe/initialize'

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
