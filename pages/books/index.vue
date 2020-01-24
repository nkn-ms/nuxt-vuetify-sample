<template>
  <v-layout column justify-center align-center>
    <v-list two-line min-width="600px" max-width="900px">
      <template
        v-for="(item, index) in books.list.slice(
          pageSize * (page - 1),
          pageSize * page
        )"
      >
        <bookItem :book="item" :key="item.title" :width="800"></bookItem>
        <v-divider v-if="index + 1 < pageSize" :key="index"></v-divider>
      </template>
    </v-list>
    <v-pagination v-model="page" :length="3" :input="pageChange"></v-pagination>
  </v-layout>
</template>

<script>
import { mapState } from 'vuex'
import BookItem from '~/components/bookItem'

export default {
  components: {
    BookItem
  },
  data: () => ({
    page: 1,
    pageSize: 10,
    active: false
  }),
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
  },
  methods: {
    pageChange: (pageNumber) => {}
  }
}
</script>
