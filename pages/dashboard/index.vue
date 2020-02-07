<template>
  <v-container>
    <language-card-list :list="value"></language-card-list>
    <chart-area></chart-area>
  </v-container>
</template>

<script>
import LanguageCardList from '~/components/organisms/LanguageCardList/index'
import ChartArea from '~/components/organisms/chartArea/index'

export default {
  components: {
    LanguageCardList,
    ChartArea
  },
  data: () => {
    return {
      value: [
        {
          title: 'JavaScript',
          count: 678928,
          image: '/languages/javascript.svg'
        },
        {
          title: 'Python',
          count: 473227,
          image: '/languages/python-5.svg'
        },
        {
          title: 'Java',
          count: 340910,
          image: '/languages/java-4.svg'
        },
        {
          title: 'PHP',
          count: 199223,
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
