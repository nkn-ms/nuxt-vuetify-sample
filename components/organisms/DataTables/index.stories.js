import { storiesOf } from '@storybook/vue'
import Vue from 'vue'
import axios from 'axios'
import DataTables from './index.vue'

Vue.component('organisms-data-tables', DataTables)

async function getBookList() {
  const result = await axios.get(
    `https://app.rakuten.co.jp/services/api/BooksBook/Search/20170404?applicationId=${process.env.rakutenId}&title=javascript`
  )
  const Items = result.data.Items.map((e) => e.Item)
  return Items
}

let value = []
getBookList().then((result) => (value = result.slice()))

storiesOf('organisms/DataTables', module).add('default', () => ({
  data: () => {
    return {
      bookList: value
    }
  },
  template: '<organisms-data-tables :list="bookList"></organisms-data-tables>'
}))
