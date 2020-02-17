import { storiesOf } from '@storybook/vue'
import Vue from 'vue'
import ClickChangeColorIconButton from './index.vue'

Vue.component(
  'molecules-click-change-color-icon-button',
  ClickChangeColorIconButton
)

storiesOf('molecules/ClickChangeColorIconButton', module)
  .add('default', () => ({
    data: () => {
      return {}
    },
    template:
      '<molecules-click-change-color-icon-button></molecules-click-change-color-icon-button>'
  }))
  .add('props:icon, iconColor', () => ({
    data: () => {
      return {
        icon: 'mdi-magnify',
        iconColor: 'deeppink'
      }
    },
    template:
      '<molecules-click-change-color-icon-button :icon="icon" :iconColor="iconColor"></molecules-click-change-color-icon-button>'
  }))
