import { storiesOf } from '@storybook/vue'
import Vue from 'vue'
import HambugerMenu from './index.vue'

Vue.component('molecules-hambuger-menu', HambugerMenu)

storiesOf('molecules/HambugerMenu', module)
  .add('no data', () => ({
    data: () => {
      return {}
    },
    template: '<molecules-hambuger-menu></molecules-hambuger-menu>'
  }))
  .add('props', () => ({
    data: () => {
      return {
        list: [{ title: 'Welcome' }, { title: 'Welcome' }, { title: 'Welcome' }]
      }
    },
    template: '<molecules-hambuger-menu :list="list"></molecules-hambuger-menu>'
  }))
