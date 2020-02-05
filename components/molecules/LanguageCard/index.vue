<template>
  <v-card class="mx-auto" max-width="344">
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="headline mb-2">
          {{ value.title }}
        </v-list-item-title>
        <div class="display-1 ml-4">{{ value.count }}</div>
        <div class="ml-11 body-1 font-italic font-regular">
          repositories
        </div>
      </v-list-item-content>
      <v-list-item-avatar tile size="80">
        <v-img :src="value.image" contain></v-img>
      </v-list-item-avatar>
    </v-list-item>
  </v-card>
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
