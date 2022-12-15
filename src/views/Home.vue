<template>
  <div>
    <span class="text-h4">Home</span>
    <v-card flat>
      <v-card-title> Login info</v-card-title>
      <v-card-text>
        <p class="ma-0">Login: {{$isLogin}}</p>
        <p class="ma-0">EmailVerified: {{$isEmailVerified}}</p>
        <p class="ma-0">DisplayName: {{$displayName}}</p>
        <p class="ma-0">User Email: {{$user_email}}</p>
        <p class="ma-0">User ID: {{$user_id}}</p>
      </v-card-text>
    </v-card>
  </div>
</template>