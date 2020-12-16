<template>
  <v-main>
    <books/>
  </v-main>
</template>

<script>
import Books from '../components/book/books.vue'
// @ is an alias to /src

export default {
  name: 'Book',
  components: {
    Books
  }
}
</script>
