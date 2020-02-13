import { storiesOf } from '@storybook/vue'
import Vue from 'vue'
import Dashboard from '~/pages/dashboard/index'

Vue.component('dashboard', Dashboard)

storiesOf('pages/dashboard', module).add('default', () => ({
  data: () => {
    return {}
  },
  template: '<dashboard></dashboard>'
}))
