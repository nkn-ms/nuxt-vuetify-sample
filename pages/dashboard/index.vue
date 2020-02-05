<template>
  <v-container>
    <language-card-list :list="value"></language-card-list>
  </v-container>
</template>

<script>
import LanguageCardList from '~/components/organisms/LanguageCardList/index'

export default {
  components: {
    LanguageCardList
  },
  data: () => {
    return {
      value: [
        {
          title: 'JavaScript',
          count: 678389,
          image: '/languages/javascript.svg'
        },
        {
          title: 'Python',
          count: 472673,
          image: '/languages/python-5.svg'
        },
        {
          title: 'Java',
          count: 340662,
          image: '/languages/java-4.svg'
        },
        {
          title: 'PHP',
          count: 199110,
          image: '/languages/php-1.svg'
        }
      ]
    }
  },
  mounted() {
    console.log(this.$vuetify)
    console.log(this.$vuetify.breakpoint)
  }
}
</script>
