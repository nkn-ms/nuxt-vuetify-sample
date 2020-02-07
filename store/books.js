export const state = () => ({
  list: []
})

export const mutations = {
  addBooks(state, books) {
    state.list = books.slice()
  }
}

export const actions = {
  addBooks({ commit }, books) {
    commit('addBooks', books)
  },
  async getBookList({ commit }) {
    // localStorageにすでにある場合はそこから取得する
    const { books } =
      localStorage.length !== 0
        ? JSON.parse(localStorage.vuex)
        : { books: { list: [] } }
    if (books.list.length !== 0) {
      commit('addBooks', books.list)
    } else {
      const result = await this.$axios.$get(
        `https://app.rakuten.co.jp/services/api/BooksBook/Search/20170404?applicationId=${process.env.rakutenId}&title=javascript`
      )
      const Items = result.Items.map((e) => e.Item)
      commit('addBooks', Items)
    }
  }
}
