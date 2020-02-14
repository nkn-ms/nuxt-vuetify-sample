<template>
  <v-card class="mx-auto" max-width="500">
    <v-toolbar color="pink" dark>
      <molecules-hambuger-menu :list="menu"></molecules-hambuger-menu>

      <v-toolbar-title>Welcome</v-toolbar-title>

      <v-spacer></v-spacer>
      <hidden-search-form placeholder="welcome"></hidden-search-form>
    </v-toolbar>

    <v-container fluid white>
      <v-row dense>
        <v-col v-for="card in cards" :key="card.title" :cols="card.flex">
          <v-card light>
            <a :href="card.href" target="_blank">
              <v-img :src="card.src" height="200px"></v-img>
              <v-card-title v-text="card.title" class="py-0"></v-card-title>
            </a>
            <v-divider></v-divider>
            <v-card-actions light>
              <v-spacer></v-spacer>
              <click-change-color-icon-button
                icon="mdi-heart"
                icon-color="deeppink"
              ></click-change-color-icon-button>
              <click-change-color-icon-button
                icon="mdi-bookmark"
                icon-color="deepskyblue"
              ></click-change-color-icon-button>
              <click-change-color-icon-button
                icon="mdi-share-variant"
                icon-color="gold"
              ></click-change-color-icon-button>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import MoleculesHambugerMenu from '~/components/molecules/HamburgerMenu/index'
import ClickChangeColorIconButton from '~/components/molecules/ClickChangeColorIconButton/index'
import HiddenSearchForm from '~/components/molecules/HiddenSearchForm/index'

export default {
  components: {
    MoleculesHambugerMenu,
    ClickChangeColorIconButton,
    HiddenSearchForm
  },
  data: () => ({
    cards: [
      {
        title: 'source code is here',
        src: 'Octocat.jpg',
        flex: 6,
        href: 'https://github.com/nkn-ms/nuxt-vuetify-sample'
      },
      {
        title: 'storybook site is here',
        src: 'https://api.iconify.design/logos-storybook-icon.svg',
        flex: 6,
        href: 'https://storybook-nuxt-vuetify-sample.netlify.com'
      }
    ],
    menu: [{ title: 'Welcome' }, { title: 'Welcome' }, { title: 'Welcome' }]
  })
}
</script>

<style lang="scss" scoped>
.v-card a {
  text-decoration: none;
}
</style>
