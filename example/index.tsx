import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Chart from 'react-apexcharts';
import ReactApexDynamicConfig from '../.';
import './index.css';
import charts from './charts';

const App = () => {
  const [chartType, setChartType] = React.useState("pie");
  const chart = charts[chartType];
  const [options, setOptions] = React.useState<ApexCharts.ApexOptions>(
    chart.options
  );

  React.useEffect(() => setOptions(chart.options), [chartType]);

  const ChartSelector = (): JSX.Element => (
    <div className="radc-chart-selector">
      <label htmlFor="chart-type">Chart Type:</label>
      <select
        name="chart-type"
        id="chart-type"
        value={chartType}
        onChange={(e) => setChartType(e.target.value)}
      >
        <option value="pie">Pie</option>
        <option value="bar">Bar</option>
        <option value="horizontalBar">Horizontal Bar</option>
      </select>
    </div>
  );

  return (
    <div className="radc-container">
      <div className="radc-mixed-chart">
        <Chart
          key={chartType}
          options={options}
          type={chart.options.chart?.type}
          series={chart.series}
          width="600"
        />
      </div>
      <div className="radc-title">ReactApexDynamicConfig</div>
      <div className="radc-component">
        <ChartSelector />
        <ReactApexDynamicConfig
          options={options}
          onChange={(opt) => setOptions(opt)}
        />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
