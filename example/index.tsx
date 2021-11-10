import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Chart from "react-apexcharts";
import ReactApexDynamicConfig from '../.';
import "./index.css";
import charts from './charts';

const App = () => {  
  const chart = charts.bar;
  const [options, setOptions] = React.useState<ApexCharts.ApexOptions>(chart.options);

  return (
    <div className="container">
      <div className="mixed-chart">
        <Chart
          options={options}
          type={chart.options.chart?.type}
          series={chart.series}
          width="1000"
        />
      </div>
      <div className="component">
        ReactApexDynamicConfig Component
        <ReactApexDynamicConfig options={options} onChange={(opt) => setOptions(opt)}/>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
function setState(arg0: { chart: { id: string; }; xaxis: { categories: number[]; }; }): [any, any] {
  throw new Error('Function not implemented.');
}

