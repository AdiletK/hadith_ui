<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
      fixed
      dense
    >
      <v-btn
        to="/book"
        text
      >
        <span class="mr-2">Books</span>
        <v-icon>mdi-book</v-icon>
      </v-btn>
      <v-btn
        to="/hadith"
        text
      >
        <span class="mr-2">Hadith</span>
        <v-icon>mdi-weather-sunny</v-icon>
      </v-btn><v-btn
        to="/category"
        text
      >
        <span class="mr-2">Category</span>
        <v-icon>mdi-shape-outline</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import Home from './views/Home.vue';

export default {
  name: 'App',

  components: {
    Home
  },

  data: () => ({
    //

  }),
};
</script>
