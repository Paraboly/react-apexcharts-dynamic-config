import React from 'react';
import { Props, TranslationsContext } from '..';

type LabelType = 'none' | 'number' | 'percent' | 'all';
const types = ['none', 'number', 'percent', 'all'];

const getUpdatedOptions = (
  options: ApexCharts.ApexOptions,
  labelType: LabelType
) => {
  const dataLabelOptions = { ...options.dataLabels };
  (dataLabelOptions as any).labelType = labelType;
  dataLabelOptions.enabled = labelType !== 'none';

  dataLabelOptions.formatter = (value, { w, seriesIndex }) => {
    const singleDimension = typeof w.config.series[0] === 'number';
    const decimalPlace = 0;
    const dataset = singleDimension ? w.config.series : w.config.series[0].data;

    if (labelType === 'number') {
      return singleDimension ? dataset[seriesIndex] : (value as number);
    } else if (labelType === 'percent') {
      if (singleDimension) return (value as number).toFixed(decimalPlace) + '%';
      const total = dataset.reduce((m: number, c: number) => m + c, 0);
      const percentage = ((value as number) / total) * 100;
      return `${percentage.toFixed(decimalPlace)} %`;
    } else if (labelType === 'all') {
      const total = dataset.reduce((m: number, c: number) => m + c, 0);
      const labelValue = singleDimension
        ? dataset[seriesIndex]
        : (value as number);
      const percent = (labelValue / total) * 100;
      return `${percent.toFixed(decimalPlace)}% (${labelValue})`;
    }
  };

  return {
    ...options,
    ...{ dataLabels: dataLabelOptions },
  };
};

const DataLabels = ({ options, onChange }: Props) => {
  const translations = React.useContext(TranslationsContext);
  if (!options.dataLabels) {
    options.dataLabels = { decimalPlace: 0 } as any;
  } else if (!(options.dataLabels as any)?.decimalPlace) {
    (options.dataLabels as any).decimalPlace = 0;
  }
  return (
    <div>
      <p>{translations.dataLabels}</p>
      {types.map((type) => (
        <div key={type}>
          <input
            type="radio"
            id={type}
            value={type}
            name="datalabel"
            checked={(options.dataLabels as any)?.labelType === type}
            onChange={(e) => {
              const selectedType = e.target.value as LabelType;
              onChange({
                ...getUpdatedOptions(options, selectedType),
              });
            }}
          />
          <label htmlFor={type}>{translations[type]}</label>
          <br />
        </div>
      ))}
    </div>
  );
};

export default DataLabels;
