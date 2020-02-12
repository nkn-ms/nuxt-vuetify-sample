import { storiesOf } from '@storybook/vue'
import Vue from 'vue'
import LayoutDefault from '~/layouts/default.vue'
import LayoutError from '~/layouts/error.vue'

Vue.component('organisms-layout-default', LayoutDefault)
Vue.component('organisms-layout-error', LayoutError)

storiesOf('organisms/LayoutDefault', module)
  .add('default', () => ({
    data: () => {
      return {}
    },
    template: '<organisms-layout-default></organisms-layout-default>'
  }))
  .add('error: 404', () => ({
    data: () => {
      return { error: { statusCode: 404 } }
    },
    template: '<organisms-layout-error :error="error"></organisms-layout-error>'
  }))
  .add('error: others', () => ({
    data: () => {
      return { error: { statusCode: 'others' } }
    },
    template: '<molecules-layout-error :error="error"></molecules-layout-error>'
  }))
