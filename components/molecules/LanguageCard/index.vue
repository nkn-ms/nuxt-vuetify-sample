<template>
  <v-card class="mx-auto" max-width="360">
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="headline mb-2">
          {{ value.title }}
        </v-list-item-title>
        <div class="display-1 text-center">{{ value.count }}</div>
        <div class="text-right body-1 font-italic font-regular">
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
