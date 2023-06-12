<script>
import { Bar } from "vue-chartjs";
import ChartDataLabels from "chartjs-plugin-datalabels";
export default {
  extends: Bar,
  data() {
    return {
      options: {
        layout: {},
        elements: {
          point: {
            radius: 3,
          },
          line: {
            tension: 0,
          },
        },
        scales: {
          paddingLeft: 100,

          yAxes: [
            {
              ticks: {
                display: false,
                beginAtZero: true,
              },
              gridLines: {
                display: false,
                drawOnChartArea: false,
              },
            },
          ],
          xAxes: [
            {
              ticks: {
                display: true,
                maxRotation: 0,
                fontSize: this.$route.query.period != "month" ? 12 : 8,
                callback: function (label) {
                  if (/\s/.test(label)) {
                    return label.split(" ");
                  } else {
                    return label;
                  }
                },
              },
              gridLines: {
                display: false,
              },
            },
          ],
        },
        legend: {
          display: false,
        },
        tooltips: {
          enabled: false,
        },
        responsive: true,
        maintainAspectRatio: false,
      },
    };
  },
  computed: {
    getValues() {
      let res = [];

      this.labels.forEach(() => {
        res.push(2000);
      });
      return res;
    },
    labels() {
      let period = this.$route.query.period
      if (period == "week") {
        return [
          "01.02.2022 (32)",
          "02.02.2022 (13)",
          "03.02.2022 (62)",
          "03.02.2022 (13)",
          "05.02.2022 (69)",
          "06.02.2022 (99)",
          "07.02.2022 (12)",
        ];
      }
      else if (period == 'year') {
        return [
        "Январь (32)",
        "Февраль (32)",
        "Март (32)",
        "Апрель (32)",
        "Май (32)",
        "Июнь (32)",
        "Июль (32)",
        "Август (32)",
        "Сентябрь (32)",
        "Октябрь (32)",
        "Ноябрь (32)",
        "Декабрь (32)",
        ];
      } 
      else if (period == 'all') {
        return [
          "2021(39 778)",
          "2022(13 978)",
          "2023(65 571)"
        ]
      }
      return [
        "01.02.2022 (32)",
        "02.02.2022 (13)",
        "03.02.2022 (62)",
        "03.02.2022 (13)",
        "05.02.2022 (69)",
        "06.02.2022 (99)",
        "07.02.2022 (12)",
        "01.02.2022 (32)",
        "02.02.2022 (13)",
        "03.02.2022 (62)",
        "03.02.2022 (13)",
        "05.02.2022 (69)",
        "06.02.2022 (99)",
        "07.02.2022 (12)",
        "01.02.2022 (32)",
        "02.02.2022 (13)",
        "03.02.2022 (62)",
        "03.02.2022 (13)",
        "05.02.2022 (69)",
        "06.02.2022 (99)",
        "07.02.2022 (12)",
        "01.02.2022 (32)",
        "02.02.2022 (13)",
        "03.02.2022 (62)",
        "03.02.2022 (13)",
        "05.02.2022 (69)",
        "06.02.2022 (99)",
        "07.02.2022 (12)",
      ];
    },
  },
  methods: {
    createGraph() {
      this.renderChart(
        {
          labels: this.labels,
          datasets: [
            {
              categoryPercentage: 1,
              data: this.getValues,
              fill: true,
              borderColor: "rgba(0,141,196, 1)",
              backgroundColor: "rgb(230,243,249)",
              borderRadius: 0,
              borderWidth: 3,
            },
          ],
        },
        this.options
      );
    },
  },
  mounted() {
    this.addPlugin(ChartDataLabels);
    this.createGraph();
  },
  watch: {
    labels() {
      this.createGraph();
    },
  },
};
</script>