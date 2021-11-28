import { ApexOptions } from 'apexcharts';
import React from 'react';
import { Props, TranslationsContext } from '..';

const getUpdatedOptions = (
  options: ApexOptions,
  axisLabelSize: string,
  axis: 'xaxis' | 'yaxis' = 'xaxis'
): ApexOptions => {
  const axisOpt = options[axis] as ApexXAxis;
  const opt = {
    ...options,
    [axis]: {
      ...axisOpt,
      labels: {
        ...axisOpt?.labels,
        ...{
          [axis === 'xaxis' ? 'maxHeight' : 'maxWidth']: parseInt(
            axisLabelSize
          ),
        },
      },
    },
  };
  return opt;
};

const AxisLabelSize = ({ options, onChange }: Props) => {
  const translations = React.useContext(TranslationsContext);
  const xAxisLabelSize = options.xaxis?.labels?.maxHeight || 120;
  const yAxisLabelSize = (options.yaxis as ApexYAxis)?.labels?.maxWidth || 160;

  return (
    <div>
      <p>{translations.axisLabelSize}</p>
      {options.xaxis && !options.plotOptions?.bar?.horizontal && (
        <div>
          <label htmlFor="xaxis-label-size">
            {translations.xaxis}({xAxisLabelSize}px):
          </label>
          <input
            type="range"
            id="xaxis-label-size"
            name="xaxis-label-size"
            value={xAxisLabelSize}
            onChange={(e) => {
              const labelSize = e.target.value;
              onChange({ ...getUpdatedOptions(options, labelSize) });
            }}
            min="0"
            max="1000"
          ></input>
          <br />
        </div>
      )}
      {options.yaxis && (
        <div>
          <label htmlFor="yaxis-label-size">
            {translations.yaxis}({yAxisLabelSize}px):
          </label>
          <input
            type="range"
            id="yaxis-label-size"
            name="yaxis-label-size"
            value={yAxisLabelSize}
            onChange={(e) => {
              const labelSize = e.target.value;
              onChange({ ...getUpdatedOptions(options, labelSize, 'yaxis') });
            }}
            min="0"
            max="1000"
          ></input>
          <br />
        </div>
      )}
    </div>
  );
};

export default AxisLabelSize;
