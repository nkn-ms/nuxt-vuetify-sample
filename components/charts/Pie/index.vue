<script>
import { Pie } from 'vue-chartjs'

export default {
  extends: Pie,
  props: {
    data: {
      type: Object,
      default: () => {}
    },
    options: {
      type: Object,
      default: () => {}
    }
  },
  mounted() {
    this.renderChart(this.data, this.options)
  }
}
</script>
