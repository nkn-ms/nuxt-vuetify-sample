import { storiesOf } from '@storybook/vue'
import Vue from 'vue'
import BookItem from './index.vue'

Vue.component('book-item', BookItem)

const value = {
  author: '狩野 祐東',
  isbn: '9784815601577',
  itemPrice: 2728,
  itemUrl: 'https://books.rakuten.co.jp/rb/16014712/',
  publisherName: 'SBクリエイティブ',
  reviewAverage: '0.0',
  reviewCount: 0,
  salesDate: '2019年09月24日',
  size: '単行本',
  smallImageUrl:
    'https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/1577/9784815601577.jpg?_ex=64x64',
  subTitle: '',
  title: '確かな力が身につくJavaScript「超」入門 第2版'
}

const value2 = Object.assign({}, value)
value2.author = 'author'

storiesOf('BookItem', module)
  .add('default', () => ({
    data: () => {
      return {
        book: value
      }
    },
    template: '<book-item :book="book"></book-item>'
  }))
  .add('noData', () => ({
    data: () => {
      return {
        book: value2
      }
    },
    template: '<book-item :book="book"></book-item>'
  }))
