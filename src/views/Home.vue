<template>
  <div class="home">
    <v-app-bar app color="primary" dark fixed dense>
      <v-btn to="/book" text>
        <span class="mr-2">Books</span>
        <v-icon>mdi-book</v-icon>
      </v-btn>
      <v-btn to="/hadith" text>
        <span class="mr-2">Hadith</span>
        <v-icon>mdi-weather-sunny</v-icon> </v-btn
      ><v-btn to="/category" text>
        <span class="mr-2">Category</span>
        <v-icon>mdi-shape-outline</v-icon>
      </v-btn>
      <v-btn to="/language" text>
        <span class="mr-2">Language</span>
        <v-icon>mdi-shape-outline</v-icon>
      </v-btn>
        <v-btn to="/source" text>
        <span class="mr-2">Source</span>
        <v-icon>mdi-shape-outline</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn icon @click="logout">
        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src
import * as auth from '../api/auth'
export default {
  name: "Home",
  components: {},
  methods: {
    isLogedIn: function () {
      let token = window.localStorage.getItem("token");
      return token ? true : false;
    },
    logout: function () {
      let isSure = confirm("Вы уверены что хотите выйти из аккаунта ?");
      if (isSure) {
        auth.logout();
        this.$router.push("login");
      }
    },
  },
};
</script>
