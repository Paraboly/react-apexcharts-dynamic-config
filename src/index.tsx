import ApexCharts from 'apexcharts';
import React, { FC } from 'react';
import FontSize from './components/FontSize';
import LegendPosition from './components/LegendPosition';
import TitleVisibility from './components/TitleVisibility';

export interface Props {
  options: ApexCharts.ApexOptions;
  onChange: (updatedOpt: ApexCharts.ApexOptions) => void;
}

const ReactApexDynamicConfig: FC<Props> = (args) => {
  return (
    <div>
      {args.options.legend && <LegendPosition {...args} />}
      {args.options.title && <TitleVisibility {...args} />}
      {(args.options.xaxis || args.options.yaxis) && <FontSize {...args} />}
    </div>
  );
};

export default ReactApexDynamicConfig;
