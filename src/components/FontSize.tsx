import { ApexOptions } from 'apexcharts';
import React from 'react';
import { Props } from '..';

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
  const xAxisFontSize =
    fontTextToInteger(options.xaxis?.labels?.style?.fontSize) || 12;
  const yAxisFontSize =
    fontTextToInteger((options.yaxis as ApexXAxis)?.labels?.style?.fontSize) ||
    12;

  return (
    <div>
      <p>Font Size:</p>
      {options.xaxis && (
        <div>
          <label htmlFor="xaxis-font-size">X-Axis({xAxisFontSize}px):</label>
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
          <label htmlFor="xaxis-font-size">Y-Axis({yAxisFontSize}px):</label>
          <input
            type="range"
            id="xaxis-font-size"
            name="xaxis-font-size"
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
