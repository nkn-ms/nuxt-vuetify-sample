<template>
  <v-layout justify-center>
    <v-card class="d-flex flex-no-wrap justify-center">
      <div>
        <v-card-title v-text="value.title" class="headline"></v-card-title>
        <v-card-subtitle v-text="value.author"></v-card-subtitle>
        <v-card-text v-text="value.subTitle" class="py-0"></v-card-text>
        <v-card-text v-text="value.salesDate" class="py-0"></v-card-text>
        <v-card-text v-text="value.size" class="py-0"></v-card-text>
        <v-card-text v-text="value.publisherName" class="py-0"></v-card-text>
        <v-card-text v-text="`${value.itemPrice}円`" class="py-0"></v-card-text>
        <v-card-text v-text="value.isbn" class="py-0"></v-card-text>
      </div>
      <v-avatar class="ma-3" size="250" tile>
        <v-img :src="value.largeImageUrl" contain></v-img>
      </v-avatar>
    </v-card>
  </v-layout>
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
