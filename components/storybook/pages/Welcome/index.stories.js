import { storiesOf } from '@storybook/vue'
import Vue from 'vue'
import Welcome from '~/pages/welcome/index'

Vue.component('welcome', Welcome)

storiesOf('pages/welcome', module).add('default', () => ({
  data: () => {
    return {}
  },
  template: '<welcome></welcome>'
}))
