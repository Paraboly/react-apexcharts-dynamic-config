import ApexCharts from 'apexcharts';
import React, { FC, useEffect, useState } from 'react';
import AxisLabelSize from './components/AxisLabelSize';
import DataLabels from './components/DataLabels';
import FontSize from './components/FontSize';
import LegendPosition from './components/LegendPosition';
import TitleVisibility from './components/TitleVisibility';
import translations from './translations';

export const TranslationsContext = React.createContext<{
  [key: string]: string;
}>(translations);

export interface Props {
  options: ApexCharts.ApexOptions;
  onChange: (updatedOpt: ApexCharts.ApexOptions) => void;
  translations?: Record<string, string>;
}

const ReactApexDynamicConfig: FC<Props> = (args) => {
  const [
    initialOptions,
    setInitialOptions,
  ] = useState<ApexCharts.ApexOptions>();
  useEffect(() => {
    setInitialOptions({ ...args.options });
  }, []);

  const onReset = () => {
    const initialOpt: ApexCharts.ApexOptions = JSON.parse(
      JSON.stringify(initialOptions as ApexCharts.ApexOptions)
    );
    args.onChange({
      ...initialOpt,
    });
  };

  return (
    <TranslationsContext.Provider value={args.translations || translations}>
      <div className="radc-wrapper">
        <div className="radc-options">
          {args.options.legend && <LegendPosition {...args} />}
          {args.options.title && <TitleVisibility {...args} />}
          {(args.options.xaxis || args.options.yaxis) && <FontSize {...args} />}
          {(args.options.xaxis || args.options.yaxis) && (
            <AxisLabelSize {...args} />
          )}
          <DataLabels {...args} />
        </div>
        <div className="radc-rest">
          <button onClick={onReset}>{(args.translations || translations).reset}</button>
        </div>
      </div>
    </TranslationsContext.Provider>
  );
};

export default ReactApexDynamicConfig;
