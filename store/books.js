export const state = () => ({
  list: [],
  details: {}
})

export const mutations = {
  addBooks(state, books) {
    state.list = books.slice()
  },
  addBookDetails(state, details) {
    state.details = details
  }
}

export const actions = {
  addBooks({ commit }, books) {
    commit('addBooks', books)
  },
  addBookDetails({ commit }, details) {
    commit('addBookDetails', details)
  }
}
