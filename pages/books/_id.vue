<template>
  <container-book-details></container-book-details>
</template>

<script>
import containerBookDetails from '~/container/BookDetails/index'

export default {
  components: {
    containerBookDetails
  }
  // TODO: nuxt.config.jsでgenerate時にpayloadを設定しているがなぜかundefined
  // asyncData({ params, error, payload }) {
  //   console.log('payload')
  //   console.log(payload)
  //   if (payload) {
  //     return { user: payload }
  //   }
  //   else return { user: await backend.fetchUser(params.id) }
  // }
}
</script>
