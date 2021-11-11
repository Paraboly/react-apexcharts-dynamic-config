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
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148, 120, 119],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: 'bar',
      },
      plotOptions: {
        bar: {
          horizontal: true,
          borderRadius: 10,
        },
      },
      title: {
        text: 'Product Trends by Month',
        align: 'left',
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'],
          opacity: 0.5,
        },
      },
      yaxis: {
        labels: {
          maxWidth: 400
        }
      },
      xaxis: {
        categories: [
          'Ich fahre bereits Bus/ Bahn/ Straßenbahn',
          'Ja',
          'Ja, wenn die Arbeits- und Meeting-Zeiten an die Fahrpläne von Bus/Bahn angepasst sind',
          'Ja, wenn es ein JobTicket gäbe',
          'Ja, wenn die Preise günstiger wären',
          'Ja, wenn die Fahrtzeit kürzer wäre',
          'Ja, wenn die Verbindungen zuverlässiger wären (Pünktlichkeit, Zugausfall)',
          'Ja, wenn die Anbindungen besser wären (Haltestellen am Wohnort)',
          'Ja, wenn es mehr Komfort in Bus/ Bahn/ Straßenbahn gäbe',
          'Ja, wenn ich mehr Informationen hätte (Abfahrtszeiten, Fahrtzeiten, Umstiegsmöglichkeiten, Routenberechnung)',
          'Nein',
        ],
        labels: {
          style: {
            fontSize: "12px"
          }
        }
      },
    },
  },
  horizontalBar: {
    series: [
      {
        data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380, 500],
      },
    ],
    options: {
      chart: {
        type: 'bar',
        height: 350,
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          horizontal: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: [
          'South Korea South Korea South Korea South Korea',
          'Canada',
          'United Kingdom',
          'Netherlands',
          'Italy',
          'France',
          'Japan',
          'United States',
          'China',
          'Germany',
        ],
      },
      yaxis: {
        labels: {
          minWidth: 600,
        },
      },
    },
  },
};

export default charts;
