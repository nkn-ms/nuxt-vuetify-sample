<template>
  <v-layout column justify-center align-center>
    <v-pagination
      v-model="page"
      :length="list.length / pageSize"
      :input="pageChange"
    ></v-pagination>
    <v-list two-line min-width="600px" max-width="900px">
      <template
        v-for="(item, index) in list.slice(
          pageSize * (page - 1),
          pageSize * page
        )"
      >
        <molecules-book-item
          :value="item"
          :key="item.title"
          :width="800"
        ></molecules-book-item>
        <v-divider v-if="index + 1 < pageSize" :key="index"></v-divider>
      </template>
    </v-list>
    <v-pagination
      v-model="page"
      :length="list.length / pageSize"
      :input="pageChange"
    ></v-pagination>
  </v-layout>
</template>

<script>
import moleculesBookItem from '~/components/molecules/bookItem/index.vue'

export default {
  components: {
    moleculesBookItem
  },
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  data: () => ({
    page: 1,
    pageSize: 10,
    active: false
  }),
  methods: {
    pageChange: (pageNumber) => {}
  }
}
</script>
