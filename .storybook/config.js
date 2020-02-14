import { configure, addDecorator } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, boolean } from '@storybook/addon-knobs';


import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'
import welcome from '~/pages/welcome/index'

Vue.component('nuxt-link', {
  props: ['to'],
  methods: {
    log() {
      action('link target')(this.to)
    }
  },
  template: '<a href="#" @click.prevent="log()"><slot>NuxtLink</slot></a>'
})

Vue.component('router-link', {
  props: ['to'],
  methods: {
    log() {
      action('link target')(this.to)
    }
  },
  template: '<a href="#" @click.prevent="log()"><slot>RouterLink</slot></a>'
})
// layouts/default.vueのerrorメッセージ対応、本番と同様にするならば、pages下のcomponentを動的に表示させる。defaultでinformation、それ以外はサイドバーonClickで切替え
Vue.component('welcome', welcome )
Vue.component('nuxt', {
  template: '<welcome/>'
})

// 依存注入
Vue.use(Vuetify)
addDecorator(withKnobs)
// dark thme switcher https://github.com/vuetifyjs/vue-cli-plugin-vuetify-storybook/issues/4
addDecorator(() => ({
  props: {
    dark: {
      default: boolean('Dark Theme', false)
    },
  },
  watch: {
    dark(val) {
      this.$vuetify.theme.dark = val
    },
  },
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