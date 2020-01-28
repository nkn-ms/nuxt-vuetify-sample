import { storiesOf } from '@storybook/vue'
import Vue from 'vue'
import axios from 'axios'
import BookList from './index.vue'

Vue.component('organisms-book-list', BookList)

async function getBookList() {
  const result = await axios.get(
    `https://app.rakuten.co.jp/services/api/BooksBook/Search/20170404?applicationId=${process.env.rakutenId}&title=javascript`
  )
  const Items = result.data.Items.map((e) => e.Item)
  return Items
}

let value = []
getBookList().then((result) => (value = result.slice()))

storiesOf('organisms/BookList', module)
  .add('default', () => ({
    data: () => {
      return {
        bookList: value
      }
    },
    template: '<organisms-book-list :list="bookList"></organisms-book-list>'
  }))
  .add('noData', () => ({
    template: '<organisms-book-list></organisms-book-list>'
  }))
