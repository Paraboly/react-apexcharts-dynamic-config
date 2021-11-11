import ApexCharts from 'apexcharts';
import React, { FC, useEffect, useState } from 'react';
import DataLabels from './components/DataLabels';
import FontSize from './components/FontSize';
import LegendPosition from './components/LegendPosition';
import TitleVisibility from './components/TitleVisibility';

export interface Props {
  options: ApexCharts.ApexOptions;
  onChange: (updatedOpt: ApexCharts.ApexOptions) => void;
}

const ReactApexDynamicConfig: FC<Props> = (args) => {
  const [
    initialOptions,
    setInitialOptions,
  ] = useState<ApexCharts.ApexOptions>();
  useEffect(() => {
    setInitialOptions({...args.options});
  }, []);

  const onReset = () => {
    args.onChange({...JSON.parse(JSON.stringify(initialOptions as ApexCharts.ApexOptions))});
  }
  
  return (
    <div>
      {args.options.legend && <LegendPosition {...args} />}
      {args.options.title && <TitleVisibility {...args} />}
      {(args.options.xaxis || args.options.yaxis) && <FontSize {...args} />}
      <DataLabels {...args} />
      <button onClick={onReset}>Reset</button>
    </div>
  );
};

export default ReactApexDynamicConfig;
