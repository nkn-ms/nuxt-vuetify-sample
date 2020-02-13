import { storiesOf } from '@storybook/vue'
import Vue from 'vue'
import Index from '~/pages/index'

Vue.component('index', Index)

storiesOf('pages/index', module).add('default', () => ({
  data: () => {
    return {}
  },
  template: '<index></index>'
}))
