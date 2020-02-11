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
  async mounted() {
    // localstorageにアクセスするのでmounted
    await this.$store.dispatch('books/getBookList')
  }
}
</script>
