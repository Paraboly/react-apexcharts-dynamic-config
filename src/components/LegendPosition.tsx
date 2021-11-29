import React from 'react';
import { Props, TranslationsContext } from '..';

type Position = 'top' | 'right' | 'bottom' | 'left';
const positions = ['top', 'right', 'bottom', 'left'];

const LegendPosition = ({ options, onChange }: Props) => {
  const translations = React.useContext(TranslationsContext);
  return (
    <div>
      <p>{translations.legendPosition}</p>
      {positions.map((pos) => (
        <div key={pos}>
          <input
            type="radio"
            id={pos}
            value={pos}
            name="position"
            checked={options.legend?.position === pos}
            onChange={(e) => {
              onChange({
                ...options,
                ...{ legend: { position: e.target.value as Position } },
              });
            }}
          />
          <label htmlFor={pos}>{translations[pos] as string}</label>
          <br />
        </div>
      ))}
    </div>
  );
};

export default LegendPosition;
