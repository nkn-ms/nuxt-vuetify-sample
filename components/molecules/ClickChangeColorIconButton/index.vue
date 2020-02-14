<template>
  <v-btn @click="isClick = !isClick" icon>
    <v-icon :style="changeColor">{{ icon }}</v-icon>
  </v-btn>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: ''
    },
    iconColor: {
      type: String,
      default: ''
    }
  },
  data: () => {
    return {
      isClick: false
    }
  },
  computed: {
    changeColor() {
      let styleText = ''
      if (this.isClick) {
        styleText = `color: ${this.iconColor}`
      }
      return styleText
    }
  }
}
</script>
