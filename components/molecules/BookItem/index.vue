<template>
  <v-list-item :to="`/books/${value.isbn}`" :ripple="false" nuxt>
    <v-list-item-avatar :tile="true" height="100px" width="100px">
      <v-img :src="value.smallImageUrl" height="100%" contain></v-img>
    </v-list-item-avatar>
    <v-list-item-content>
      <v-list-item-title v-text="value.title"></v-list-item-title>
      <v-list-item-subtitle
        v-text="value.author"
        class="text--primary"
      ></v-list-item-subtitle>
      <v-list-item-subtitle v-text="value.subTitle"></v-list-item-subtitle>
    </v-list-item-content>
    <v-list-item-action>
      <v-list-item-action-text
        v-text="value.salesDate"
      ></v-list-item-action-text>
      <v-btn @click="onClickActive">
        <v-icon v-if="!active" color="grey lighten-1">mdi-star-outline</v-icon>
        <v-icon v-else color="yellow">mdi-star</v-icon>
      </v-btn>
    </v-list-item-action>
  </v-list-item>
</template>

<script>
export default {
  props: {
    value: {
      type: Object,
      default: () => {}
    }
  },
  data: () => ({
    active: false
  }),
  methods: {
    onClickActive(e) {
      e.preventDefault()
      this.active = !this.active
    }
  }
}
</script>
