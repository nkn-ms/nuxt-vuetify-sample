import { storiesOf } from '@storybook/vue'
import Vue from 'vue'
import LayoutDefault from '~/layouts/default.vue'
import LayoutError from '~/layouts/error.vue'

Vue.component('layout-default', LayoutDefault)
Vue.component('layout-error', LayoutError)

storiesOf('layouts/LayoutDefault', module)
  .add('default', () => ({
    data: () => {
      return {}
    },
    template: '<layout-default></layout-default>'
  }))
  .add('error: 404', () => ({
    data: () => {
      return { error: { statusCode: 404 } }
    },
    template: '<layout-error :error="error"></layout-error>'
  }))
  .add('error: others', () => ({
    data: () => {
      return { error: { statusCode: 'others' } }
    },
    template: '<layout-error :error="error"></layout-error>'
  }))
