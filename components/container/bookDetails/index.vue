<template>
  <organisms-book-details :value="books.details"> </organisms-book-details>
</template>

<script>
import { mapState } from 'vuex'
import organismsBookDetails from '~/components/organisms/bookDetails/index'

export default {
  components: {
    organismsBookDetails
  },
  computed: {
    ...mapState(['books', 'route'])
  },
  async beforeMount() {
    const result = await this.$axios.$get(
      `https://app.rakuten.co.jp/services/api/BooksBook/Search/20170404?applicationId=1016170938031993234&isbn=${this.route.params.id}`
    )
    const { Item } = result.Items[0]
    await this.$store.dispatch('books/addBookDetails', Item)
  }
}
</script>
