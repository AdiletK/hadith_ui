<template>
  <v-main>
    <categories/>
  </v-main>
</template>

<script>
import Categories from '../components/category/categories.vue'
// @ is an alias to /src

export default {
  name: 'Category',
  components: {
    Categories
  }
}
</script>
