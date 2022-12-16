module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  chainWebpack: (config) => {
    // https://qiita.com/uturned0/items/5fdf2d92548274fe56e3
    // https://rinoguchi.net/2020/05/vue-firebase-reduce-bundle-size.html
    // https://stackoverflow.com/questions/66179210/how-to-externalize-a-lib-with-vue-cli
    config.externals({
  //    firebase: 'firebase',
  //    'firebase/auth': 'firebase',
  //    firebaseui: 'firebaseui',
      vue: 'Vue',
      vuetify: 'Vuetify',
      'vuetify/lib': 'Vuetify',
  //    give up to use cdn, can't fix an error 'Cannot redefine property: $router'
  //    'vue-router':  'vue-router'
    })
  }
}
