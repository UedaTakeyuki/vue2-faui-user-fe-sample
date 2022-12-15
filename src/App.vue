<template>
  <v-app>

    <!-- Navigation bar -->
    <Navbar :links="links">
    </Navbar>

    <!-- Login hidden component -->
    <Login
    />

    <v-main>
      <router-view/>
    </v-main>
  </v-app>

</template>

<script>
import {AccountRoutes as AccountRoutes} from 'vue2-faui-user-fe/account'    // If firebase is from npm or yarn
import {Login as Login} from 'vue2-faui-user-fe/login'
import {Navbar} from 'vuetify-nav'

export default {
  name: 'App',

  components: { Navbar, Login},
  data: () => ({
    links: [
      { icon: 'home', text: 'Home', route: '/'},
      AccountRoutes.menuItem,
    ]
  }),
};
</script>
