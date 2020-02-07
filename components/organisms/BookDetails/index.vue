<template>
  <v-container class="grey lighten-5">
    <v-row>
      <v-col cols="4">
        <v-card class="pa-2" outlined tile>
          <v-list-item-avatar :tile="true" height="100px" width="100px">
            <v-img :src="value.smallImageUrl" height="100%" contain></v-img>
          </v-list-item-avatar>
        </v-card>
      </v-col>
      <v-col>
        <v-card class="pa-2" outlined tile>
          <v-list-item-content>
            <v-list-item-title v-text="value.title"></v-list-item-title>
            <v-list-item-subtitle
              v-text="value.author"
              class="text--primary"
            ></v-list-item-subtitle>
            <v-list-item-subtitle
              v-text="value.subTitle"
            ></v-list-item-subtitle>
            <v-list-item-subtitle
              v-text="`${value.itemPrice}円`"
            ></v-list-item-subtitle>
            <v-list-item-subtitle
              v-text="value.salesDate"
            ></v-list-item-subtitle>
            <v-list-item-subtitle v-text="value.size"></v-list-item-subtitle>
            <v-list-item-subtitle
              v-text="value.publisherName"
            ></v-list-item-subtitle>
            <v-list-item-subtitle v-text="value.isbn"></v-list-item-subtitle>
          </v-list-item-content>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    value: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
