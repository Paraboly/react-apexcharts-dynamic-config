import React, { useState } from 'react';
import Chart from "react-apexcharts";
import { Meta, Story } from '@storybook/react';
import ReactApexDynamicConfig, { Props } from '../src';

const meta: Meta = {
  title: 'ReactApexDynamicConfig',
  component: ReactApexDynamicConfig,
};

export default meta;

const Template: Story<Props> = (args) => {
  const [options, setOptions] = useState({ ...args.options });
  const series = [{
    data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
  }];
  const onOptionsChange = (newOptions: ApexCharts.ApexOptions) => {
    setOptions(newOptions);
  };
  return (
    <div style={{display: "flex"}}>
      <Chart
          options={options}
          type={options.chart?.type}
          series={series}
          width="500"
        />
        <ReactApexDynamicConfig options={options} onChange={onOptionsChange} />
    </div>    
  );
};

export const Default = Template.bind({});

Default.args = {
  options: {
    title: {
      text: "This is Chart"
    },
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
    yaxis: {},
    xaxis: {
      categories: [
        'South Korea',
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
      labels: {
        offsetX: 0,
        offsetY: 0,
      },
    },
    labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
    legend: {
      position: 'bottom' as 'bottom',
    },
  },
};
