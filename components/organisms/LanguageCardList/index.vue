<template>
  <v-row v-resize="onResize">
    <v-col cols="12">
      <a
        href="https://github.com/search?q=stars%3A%3E1&s=stars&type=Repositories"
      >
        Number of repositories by language more than 1 star
      </a>
    </v-col>
    <v-col v-for="item in list" :key="item.title" :lg="lgCol()" sm="6" md="6">
      <language-card-list :value="item"></language-card-list>
    </v-col>
  </v-row>
</template>

<script>
import LanguageCardList from '~/components/molecules/LanguageCard/index'

export default {
  components: {
    LanguageCardList
  },
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  data: () => {
    return {
      width: 0
    }
  },
  methods: {
    onResize() {
      this.width = this.$el.clientWidth + 24 + 256 + 16 - 1
    },
    lgCol() {
      let cols = 3
      if (this.width >= 1264 && this.width <= 1434) {
        cols = 6
      }
      return cols
    }
  }
}
</script>
