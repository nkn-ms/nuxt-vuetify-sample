import { storiesOf } from '@storybook/vue'
import Vue from 'vue'
import LanguageCard from './index.vue'

Vue.component('molecules-language-card', LanguageCard)

const value = {
  title: 'JavaScript',
  count: 678389,
  image: '/languages/javascript.svg'
}

storiesOf('molecules/LanguageCard', module).add('default', () => ({
  data: () => {
    return {
      value
    }
  },
  template: '<molecules-language-card :value="value"></molecules-language-card>'
}))
