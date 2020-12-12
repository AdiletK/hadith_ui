<template>
  <div class="home">
    <books/>
  </div>
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
