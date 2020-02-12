import { storiesOf } from '@storybook/vue'
import Vue from 'vue'
import UserMenu from './index.vue'

Vue.component('molecules-user-menu', UserMenu)

storiesOf('molecules/UserMenu', module).add('default', () => ({
  data: () => {
    return {}
  },
  template: '<molecules-user-menu></molecules-user-menu>'
}))
