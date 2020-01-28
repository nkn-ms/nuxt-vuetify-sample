<template>
  <organisms-book-list :list="books.list"> </organisms-book-list>
</template>

<script>
import { mapState } from 'vuex'
import organismsBookList from '~/components/organisms/bookList/index'

export default {
  components: {
    organismsBookList
  },
  computed: {
    ...mapState(['books'])
  },
  async beforeMount() {
    const { books } =
      localStorage.length !== 0
        ? JSON.parse(localStorage.vuex)
        : { books: { list: [] } }
    if (books.list.length !== 0) {
      await this.$store.dispatch('books/addBooks', books.list)
    } else {
      const result = await this.$axios.$get(
        `https://app.rakuten.co.jp/services/api/BooksBook/Search/20170404?applicationId=${process.env.rakutenId}&title=javascript`
      )
      const Items = result.Items.map((e) => e.Item)
      this.$store.dispatch('books/addBooks', Items)
    }
  }
}
</script>
