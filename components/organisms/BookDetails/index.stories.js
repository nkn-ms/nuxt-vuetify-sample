import { storiesOf } from '@storybook/vue'
import Vue from 'vue'
import BookDetails from './index.vue'

Vue.component('organisms-book-details', BookDetails)

const value = {
  title: '初めてのJavaScript 第3版',
  subTitle: 'ES2015以降の最新ウェブ開発',
  author: 'Ethan Brown/武舎 広幸',
  publisherName: 'オライリー・ジャパン',
  size: '単行本',
  isbn: '9784873117836',
  itemCaption:
    'ＥＣＭＡＳｃｒｉｐｔ　２０１５（ＥＳ２０１５）の入門書。シンプルな例題を多用しブラウザやｎｏｄｅコマンドで試しながら新しいＪａｖａＳｃｒｉｐｔを楽しく学びます。従来バージョンを使用中のＪａｖａＳｃｒｉｐｔプログラマーにも、これからＪａｖａＳｃｒｉｐｔを習得したい入門者にも有用な情報が満載です。本書を読めば、ｌｅｔやｃｏｎｓｔによる宣言とスコープ、関数の基本と高度な使い方、オブジェクトとオブジェクト指向プログラミング、イテレータやジェネレータやプロキシといったＥＳ２０１５の新機能、非同期プログラミング、クライアントサイドのＤＯＭやｊＱｕｅｒｙ、サーバーサイドのＮｏｄｅ．ｊｓなど、ＪａｖａＳｃｒｉｐｔの最新バージョンを使った開発に関する総括的な知識をバランスよく得られます。日本語版では、ＥＳ２０１６およびＥＳ２０１７の新機能の紹介も加えました。',
  salesDate: '2017年01月20日',
  itemPrice: 3520,
  itemUrl: 'https://books.rakuten.co.jp/rb/14640299/',
  largeImageUrl:
    'https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/7836/9784873117836.jpg?_ex=64x64',
  reviewCount: 3,
  reviewAverage: '4.67',
  booksGenreId: '001005003008/001005005009'
}

storiesOf('organisms/BookDetails', module).add('default', () => ({
  data: () => {
    return {
      details: value
    }
  },
  template: '<organisms-book-details :value="details"></organisms-book-details>'
}))
