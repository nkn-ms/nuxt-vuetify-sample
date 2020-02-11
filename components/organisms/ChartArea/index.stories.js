import { storiesOf } from '@storybook/vue'
import Vue from 'vue'
import ChartArea from './index.vue'

Vue.component('organisms-chart-area', ChartArea)

storiesOf('organisms/ChartArea', module).add('default', () => ({
  data: () => {
    return {}
  },
  template: '<organisms-chart-area></organisms-chart-area>'
}))
