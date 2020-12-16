<template>
  <v-app>
    <!-- <v-main>
      <router-view/>
    </v-main> -->
    <component :is="this.$route.meta.layout || 'div'">
      <router-view />
    </component>
  </v-app>
</template>

<script>
import Home from "./views/Home.vue";

export default {
  name: "App",

  components: {
    Home,
  },

  data: () => ({
    //
  }),
};
</script>
