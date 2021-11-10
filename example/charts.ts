const charts: {
  [key: string]: { options: ApexCharts.ApexOptions; series: any };
} = {
  pie: {
    options: {
      chart: {
        type: 'pie',
      },
      title: {
        text: 'Chart Title',
      },
      labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
      legend: {
        position: 'bottom' as 'bottom',
      },
    },
    series: [44, 55, 13, 43, 22],
  },
  bar: {
    series: [
      {
        name: 'Desktops',
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148, 120, 119, 79],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: 'bar'
      },
      title: {
        text: 'Product Trends by Month',
        align: 'left',
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: [
          'JanuaryJanuary',
          'February February',
          'March March March',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ],
        // labels: {
        //   hideOverlappingLabels: false,
        //   rotate: 270,
        //   rotateAlways: true,
        //   minHeight: 100
        // }
      },
    },
  },
  horizontalBar: {
    series: [{
      data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
    }],
    options: {
      chart: {
        type: 'bar',
        height: 350
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          horizontal: true,
        }
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: ['South Korea South Korea South Korea South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
          'United States', 'China', 'Germany'
        ]
      },
      yaxis: {
        labels:{
          minWidth: 600
        }
      }
    }
  }
};

export default charts;
