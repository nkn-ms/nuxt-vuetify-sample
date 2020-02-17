import { storiesOf } from '@storybook/vue'
import Vue from 'vue'
import HeddenSearchForm from './index.vue'

Vue.component('molecules-hedden-search-form', HeddenSearchForm)

storiesOf('molecules/HeddenSearchForm', module)
  .add('default', () => ({
    data: () => {
      return {}
    },
    template: '<molecules-hedden-search-form></molecules-hedden-search-form>'
  }))
  .add('props:placeholder', () => ({
    data: () => {
      return {
        placeholder: 'welcome'
      }
    },
    template:
      '<molecules-hedden-search-form :placeholder="placeholder"></molecules-hedden-search-form>'
  }))
