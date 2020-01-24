<template>
  <v-container class="grey lighten-5">
    <v-row>
      <v-col cols="4">
        <v-card class="pa-2" outlined tile>
          <v-list-item-avatar :tile="true" height="100px" width="100px">
            <v-img
              :src="books.details.smallImageUrl"
              height="100%"
              contain
            ></v-img>
          </v-list-item-avatar>
        </v-card>
      </v-col>
      <v-col>
        <v-card class="pa-2" outlined tile>
          <v-list-item-content>
            <v-list-item-title v-text="books.details.title"></v-list-item-title>
            <v-list-item-subtitle
              v-text="books.details.author"
              class="text--primary"
            ></v-list-item-subtitle>
            <v-list-item-subtitle
              v-text="books.details.subTitle"
            ></v-list-item-subtitle>
            <v-list-item-subtitle
              v-text="`${books.details.itemPrice}円`"
            ></v-list-item-subtitle>
            <v-list-item-subtitle
              v-text="books.details.salesDate"
            ></v-list-item-subtitle>
            <v-list-item-subtitle
              v-text="books.details.size"
            ></v-list-item-subtitle>
            <v-list-item-subtitle
              v-text="books.details.publisherName"
            ></v-list-item-subtitle>
            <v-list-item-subtitle
              v-text="books.details.isbn"
            ></v-list-item-subtitle>
          </v-list-item-content>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['books', 'route'])
  },
  async beforeMount() {
    const result = await this.$axios.$get(
      `https://app.rakuten.co.jp/services/api/BooksBook/Search/20170404?applicationId=1016170938031993234&isbn=${this.route.params.id}`
    )
    const { Item } = result.Items[0]
    await this.$store.dispatch('books/addBookDetails', Item)
  }
}
</script>
