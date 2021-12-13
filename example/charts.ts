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
          maxWidth: 400,
        },
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
            fontSize: '12px',
          },
        },
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
  multiBar: {
    series: [
      { name: 'Trifft zu ', data: [0, 2, 1, 2, 2, 3] },
      { name: 'Trifft eher zu ', data: [2, 0, 5, 2, 2, 2] },
      { name: 'Teils teils', data: [3, 1, 1, 1, 0, 4] },
      { name: 'Trifft eher nicht zu', data: [4, 1, 2, 3, 2, 0] },
      { name: 'Trifft nicht Zu', data: [0, 0, 1, 0, 0, 0] },
      { name: 'Kann ich nicht abschätzen', data: [1, 5, 0, 1, 2, 0] },
    ],
    options: {
      colors: [
        '#3e4e06',
        '#b2c83c',
        '#f28b00',
        '#0090d6',
        '#c00000',
        '#a6a6a6',
        '#3e4e06',
        '#feb018',
        '#008ffb',
        '#0b733a',
        '#feb018',
        '#ec1c39',
        '#008ffb',
      ],
      subtitle: {
        text: 'n= 55',
        offsetY: -1,
        style: { fontWeight: 'bold', fontFamily: 'Poppins' },
      },
      chart: {
        type: 'bar',
        stacked: false,
        toolbar: { show: true },
      },
      plotOptions: { bar: { horizontal: false } },
      legend: { fontFamily: '"Poppins", Helvetica, Arial' },
      xaxis: {
        categories: [
          ['Der Weg zu Schule ist', 'zu weit'],
          ['Ich habe kein eigens', '(verkehrstauglisches)', 'Fahrrad'],
          ['Kann nicht Rad /', 'Roller fahren'],
          ['Keine guten Radwege', 'vorhanden'],
          ['Keine Haltestelle in', 'der Nähe'],
          ['Zu lange Wartezeiten', 'für Bus und Bahn'],
          ['Kosten für Bus und ', 'Bahn '],
          'Keine Angabe',
        ],
        labels: { style: { fontFamily: '"Poppins", Helvetica, Arial' } },
      },
      dataLabels: {
        style: { fontFamily: '"Poppins", Helvetica, Arial, sans-serif' },
      },
    },
  },
  horizontalMultiBar: {
    series: [
      { name: 'Trifft zu ', data: [0, 2, 1, 2, 2, 3] },
      { name: 'Trifft eher zu ', data: [2, 0, 5, 2, 2, 2] },
      { name: 'Teils teils', data: [3, 1, 1, 1, 0, 4] },
      { name: 'Trifft eher nicht zu', data: [4, 1, 2, 3, 2, 0] },
      { name: 'Trifft nicht Zu', data: [0, 0, 1, 0, 0, 0] },
      { name: 'Kann ich nicht abschätzen', data: [1, 5, 0, 1, 2, 0] },
    ],
    options: {
      colors: [
        '#3e4e06',
        '#b2c83c',
        '#f28b00',
        '#0090d6',
        '#c00000',
        '#a6a6a6',
        '#3e4e06',
        '#feb018',
        '#008ffb',
        '#0b733a',
        '#feb018',
        '#ec1c39',
        '#008ffb',
      ],
      subtitle: {
        text: 'n= 55',
        offsetY: -1,
        style: { fontWeight: 'bold', fontFamily: 'Poppins' },
      },
      chart: {
        type: 'bar',
        defaultLocale: 'en',
        stacked: false,
        toolbar: { show: true },
      },
      plotOptions: { bar: { horizontal: true } },
      legend: { fontFamily: '"Poppins", Helvetica, Arial' },
      xaxis: {
        categories: [
          ['Der Weg zu Schule ist', 'zu weit'],
          ['Ich habe kein eigens', '(verkehrstauglisches)', 'Fahrrad'],
          ['Kann nicht Rad /', 'Roller fahren'],
          ['Keine guten Radwege', 'vorhanden'],
          ['Keine Haltestelle in', 'der Nähe'],
          ['Zu lange Wartezeiten', 'für Bus und Bahn'],
          ['Kosten für Bus und ', 'Bahn '],
          'Keine Angabe',
        ],
        labels: { style: { fontFamily: '"Poppins", Helvetica, Arial' } },
      },
      dataLabels: {
        style: { fontFamily: '"Poppins", Helvetica, Arial, sans-serif' },
      },
    },
  },
};

export default charts;
