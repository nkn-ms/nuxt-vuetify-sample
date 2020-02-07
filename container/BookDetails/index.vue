<template>
  <organisms-book-details :value="value"> </organisms-book-details>
</template>

<script>
import { mapState } from 'vuex'
import organismsBookDetails from '~/components/organisms/bookDetails/index'

export default {
  components: {
    organismsBookDetails
  },
  data: () => {
    return {
      value: {}
    }
  },
  computed: {
    ...mapState(['books', 'route'])
  },
  async beforeMount() {
    if (this.books.list.length === 0) {
      await this.$store.dispatch('books/getBookList')
    }
    this.value = await this.books.list.find(
      (book) => book.isbn === this.route.params.id
    )
  }
}
</script>
