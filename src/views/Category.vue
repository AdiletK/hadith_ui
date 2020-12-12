<template>
  <div class="home">
    <categories/>
  </div>
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
