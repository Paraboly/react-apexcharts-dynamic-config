import React from 'react';
import { Props } from '..';

type LabelType = 'none' | 'number' | 'percent' | 'all';
const types = ['none', 'number', 'percent', 'all'];

const getUpdatedOptions = (
  options: ApexCharts.ApexOptions,
  labelType: LabelType
) => {
  const dataLabelOptions = { ...options.dataLabels };
  (dataLabelOptions as any).labelType = labelType;
  if (labelType === 'none') dataLabelOptions.enabled = false;
  else if (labelType === 'number') {
    dataLabelOptions.enabled = true;
    dataLabelOptions.formatter = (value) => value as number;
  } else if (labelType === 'percent') {
    dataLabelOptions.enabled = true;
    dataLabelOptions.formatter = (value, { w }) => {
      const total = w.config.series[0].data.reduce(
        (memo: number, curr: number) => memo + curr,
        0
      );
      return (((value as number) / total) * 100).toFixed(1) + '%';
    };
  } else {
    dataLabelOptions.enabled = true;
    dataLabelOptions.formatter = (value, { w }) => {
      const total = w.config.series[0].data.reduce(
        (memo: number, curr: number) => memo + curr,
        0
      );
      const percent = (((value as number) / total) * 100).toFixed(1) + '%';
      return `${percent} (${value})`;
    };
  }

  return {
    ...options,
    ...{ dataLabels: dataLabelOptions },
  };
};

const DataLabels = ({ options, onChange }: Props) => {
  return (
    <div>
      <p>Data Label:</p>
      {types.map((type) => (
        <div key={type}>
          <input
            type="radio"
            id={type}
            value={type}
            name="position"
            checked={(options.dataLabels as any)?.labelType === type}
            onChange={(e) => {
              const selectedType = e.target.value as LabelType;
              onChange({
                ...getUpdatedOptions(options, selectedType),
              });
            }}
          />
          <label htmlFor={type}>{type}</label>
          <br />
        </div>
      ))}
    </div>
  );
};

export default DataLabels;
