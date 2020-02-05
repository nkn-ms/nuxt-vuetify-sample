import { configure, addDecorator } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

// 追加
import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css' // →これ重要

Vue.component('nuxt-link', {
  props: ['to'],
  methods: {
    log() {
      action('link target')(this.to)
    }
  },
  template: '<a href="#" @click.prevent="log()"><slot>NuxtLink</slot></a>'
})

// 依存注入
Vue.use(Vuetify)

addDecorator(() => ({
  vuetify: new Vuetify(),
  template: `
<v-app>
  <v-container>
    <story/>
  </v-container>
</v-app>
`
}))

// automatically import all files ending in *.stories.js
configure(require.context('../components', true, /\.stories\.js$/), module)