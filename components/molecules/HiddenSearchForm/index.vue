<template>
  <v-layout justify-end>
    <!-- <v-scroll-x-reverse-transition :hide-on-leave="true">
      <v-text-field
        v-show="isClick"
        :placeholder="placeholder"
        outlined
        rounded
        clearable
        dense
        hide-details
        background-color="rgba(255,255,255,0.8)"
      ></v-text-field>
    </v-scroll-x-reverse-transition>
    <v-btn @click="isClick = !isClick" icon height="40">
      <v-icon>mdi-magnify</v-icon>
    </v-btn> -->
    <v-menu
      :close-on-content-click="false"
      transition="slide-x-reverse-transition"
      nudge-top="-4"
      nudge-left="250"
    >
      <template v-slot:activator="{ on }">
        <v-btn v-on="on" icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </template>
      <v-text-field
        :placeholder="placeholder"
        outlined
        rounded
        clearable
        dense
        hide-details
        background-color="rgba(255,255,255,0.8)"
      ></v-text-field>
    </v-menu>
  </v-layout>
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      default: ''
    }
  },
  data: () => {
    return {
      isClick: false
    }
  }
}
</script>

<style lang="scss">
// MEMO: scopedがついていると反映されない
div.v-input__slot {
  div.v-text-field__slot {
    input {
      color: #424242;
      &::placeholder {
        color: grey;
      }
    }
  }
}
.v-menu__content {
  box-shadow: none;
}
</style>
