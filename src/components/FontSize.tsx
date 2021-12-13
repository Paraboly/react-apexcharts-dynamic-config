import { ApexOptions } from 'apexcharts';
import React from 'react';
import { Props, TranslationsContext } from '..';

const fontTextToInteger = (font: string | undefined) => {
  if (font) return font.slice(0, font.length - 2);
  else return 0;
};

const getUpdatedOptions = (
  options: ApexOptions,
  fontSize: string,
  axis: 'xaxis' | 'yaxis' = 'xaxis'
): ApexOptions => {
  const axisOpt = options[axis] as ApexXAxis;
  const opt = {
    ...options,
    [axis]: {
      ...axisOpt,
      labels: {
        ...axisOpt?.labels,
        style: { ...axisOpt?.labels?.style, fontSize: fontSize + 'px' },
      },
    },
  };

  return opt;
};

const FontSize = ({ options, onChange }: Props) => {
  const translations = React.useContext(TranslationsContext);
  const xAxisFontSize =
    fontTextToInteger(options.xaxis?.labels?.style?.fontSize) || 12;
  const yAxisFontSize =
    fontTextToInteger((options.yaxis as ApexXAxis)?.labels?.style?.fontSize) ||
    12;

  if (!options.xaxis && !options.yaxis) return null;
  return (
    <div>
      <p>{translations.fontSize}</p>
      {options.xaxis && (
        <div>
          <label htmlFor="xaxis-font-size">
            {translations.xaxis}({xAxisFontSize}px):
          </label>
          <input
            type="range"
            id="xaxis-font-size"
            name="xaxis-font-size"
            value={xAxisFontSize}
            onChange={(e) => {
              const fontSize = e.target.value;
              onChange({ ...getUpdatedOptions(options, fontSize) });
            }}
            min="6"
            max="32"
          ></input>
          <br />
        </div>
      )}
      {options.yaxis && (
        <div>
          <label htmlFor="yaxis-font-size">
            {translations.yaxis}({yAxisFontSize}px):
          </label>
          <input
            type="range"
            id="yaxis-font-size"
            name="yaxis-font-size"
            value={yAxisFontSize}
            onChange={(e) => {
              const fontSize = e.target.value;
              onChange({ ...getUpdatedOptions(options, fontSize, 'yaxis') });
            }}
            min="6"
            max="32"
          ></input>
          <br />
        </div>
      )}
    </div>
  );
};

export default FontSize;
