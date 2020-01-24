<template>
  <v-list-item>
    <template>
      <nuxt-link :to="`/books/${book.isbn}`">
        <v-list-item-avatar :tile="true" height="100px" width="100px">
          <v-img :src="book.smallImageUrl" height="100%" contain></v-img>
        </v-list-item-avatar>
      </nuxt-link>

      <v-list-item-content>
        <v-list-item-title v-text="book.title"></v-list-item-title>
        <v-list-item-subtitle
          v-text="book.author"
          class="text--primary"
        ></v-list-item-subtitle>
        <v-list-item-subtitle v-text="book.subTitle"></v-list-item-subtitle>
      </v-list-item-content>
      <v-list-item-action>
        <v-list-item-action-text
          v-text="book.salesDate"
        ></v-list-item-action-text>
        <v-btn @click="active = !active">
          <v-icon v-if="!active" color="grey lighten-1"
            >mdi-star-outline</v-icon
          >
          <v-icon v-else color="yellow">mdi-star</v-icon>
        </v-btn>
      </v-list-item-action>
    </template>
  </v-list-item>
</template>

<script>
export default {
  props: {
    book: {
      type: Object,
      default: () => {}
    }
  },
  data: () => ({
    active: false
  })
}
</script>
