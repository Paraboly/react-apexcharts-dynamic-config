import React from 'react';
import * as ReactDOM from 'react-dom';
import { Default as ReactApexDynamicConfig } from '../stories/ReactApexDynamicConfig.stories';

const options = {
  title: {
    text: 'This is Chart',
  },
  chart: {
    type: 'bar' as 'bar',
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
};

jest.mock("react-apexcharts", () =>
  jest.fn(() => {
    return null;
  })
);
jest.mock("apexcharts", () => ({
  exec: jest.fn(() => {
    return new Promise((resolve) => {
      resolve("uri");
    });
  })
}));

describe('ReactApexDynamicConfig', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <ReactApexDynamicConfig
        options={options}
        onChange={(opt) => console.log(opt)}
      />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
