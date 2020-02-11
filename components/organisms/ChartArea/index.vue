<template>
  <v-row>
    <v-col cols="4">
      <v-card>
        <bar-chart :data="barData" :options="barOptions"></bar-chart>
      </v-card>
    </v-col>
    <v-col cols="4">
      <v-card><pie-chart :data="pieData"></pie-chart></v-card>
    </v-col>
    <v-col cols="4">
      <v-card><line-chart :data="lineData"></line-chart></v-card>
    </v-col>
  </v-row>
</template>

<script>
import BarChart from '~/components/charts/Bar/index'
import PieChart from '~/components/charts/Pie/index'
import LineChart from '~/components/charts/Line'

export default {
  components: {
    BarChart,
    PieChart,
    LineChart
  },
  data: () => {
    return {
      barData: {
        labels: ['apple', 'Banana', 'melon', 'kiwi', 'grape', 'orange'],
        datasets: [
          {
            label: '# of Votes',
            data: [
              parseInt(Math.random() * 100),
              parseInt(Math.random() * 100),
              parseInt(Math.random() * 100),
              parseInt(Math.random() * 100),
              parseInt(Math.random() * 100),
              parseInt(Math.random() * 100)
            ],
            backgroundColor: [
              'rgba(54, 162, 235, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(54, 162, 235, 0.2)'
            ],
            borderColor: [
              'rgba(54, 162, 235, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(54, 162, 235, 1)'
            ],
            borderWidth: 1
          }
        ]
      },
      barOptions: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      },
      pieData: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            data: [
              parseInt(Math.random() * 100),
              parseInt(Math.random() * 100),
              parseInt(Math.random() * 100),
              parseInt(Math.random() * 100),
              parseInt(Math.random() * 100),
              parseInt(Math.random() * 100)
            ],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
          }
        ]
      },
      lineData: {
        labels: [
          'potato',
          'carrot',
          'broccoli',
          'onion',
          'pumpkin',
          'cucumber'
        ],
        datasets: [
          {
            label: '# of Votes',
            data: [
              parseInt(Math.random() * 100),
              parseInt(Math.random() * 100),
              parseInt(Math.random() * 100),
              parseInt(Math.random() * 100),
              parseInt(Math.random() * 100),
              parseInt(Math.random() * 100)
            ],
            backgroundColor: ['rgba(255, 99, 132, 0.2)'],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
          }
        ]
      }
    }
  }
}
</script>
