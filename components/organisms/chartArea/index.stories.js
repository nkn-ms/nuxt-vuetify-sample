import { storiesOf } from '@storybook/vue'
import Vue from 'vue'
import ChartArea from './index.vue'

Vue.component('organisms-chart-area', ChartArea)

const value = [
  {
    title: 'JavaScript',
    count: 678389,
    image: '/languages/javascript.svg'
  },
  {
    title: 'Python',
    count: 472673,
    image: '/languages/python-5.svg'
  },
  {
    title: 'Java',
    count: 340662,
    image: '/languages/java-4.svg'
  },
  {
    title: 'PHP',
    count: 199110,
    image: '/languages/php-1.svg'
  }
]

storiesOf('organisms/ChartArea', module).add('default', () => ({
  data: () => {
    return {
      languageList: value
    }
  },
  template: '<organisms-chart-area :list="languageList"></organisms-chart-area>'
}))
