import Vue from 'vue'
import { storiesOf } from '@storybook/vue'
import LanguageCardList from './index.vue'

Vue.component('organisms-language-card-list', LanguageCardList)

const value = [
  {
    title: 'JavaScript',
    count: 683080,
    image: '/languages/javascript.svg'
  },
  {
    title: 'Python',
    count: 477631,
    image: '/languages/python-5.svg'
  },
  {
    title: 'Java',
    count: 342618,
    image: '/languages/java-4.svg'
  },
  {
    title: 'PHP',
    count: 200127,
    image: '/languages/php-1.svg'
  }
]

storiesOf('organisms/LanguageCardList', module).add('default', () => ({
  data: () => {
    return {
      languageList: value
    }
  },
  template:
    '<organisms-language-card-list :list="languageList"></organisms-language-card-list>'
}))
