<template>
  <div class="text-center">
    <v-menu offset-y>
      <template v-slot:activator="{ on }">
        <v-app-bar-nav-icon v-on="on"> </v-app-bar-nav-icon>
      </template>
      <v-list>
        <v-list-item v-for="(item, index) in list" :key="index" @click="">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => []
    }
  }
}
</script>
