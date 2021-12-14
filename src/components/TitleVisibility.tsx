import React from 'react';
import { Props, TranslationsContext } from '..';

const TitleVisibility = ({ options, onChange }: Props) => {
  const translations = React.useContext(TranslationsContext);
  const titleVisible = !!options.title?.text;
  const subtitleVisible = !!options.subtitle?.text;

  const getTitleObject = (
    options: ApexCharts.ApexOptions,
    type: 'title' | 'subtitle',
    newVisibility: 'show' | 'hide'
  ) => {
    if (newVisibility === 'hide') {
      return {
        ...options,
        ...{
          [type]: {
            ...options[type],
            text: '',
            original: options[type]?.text,
          },
        },
      } as ApexCharts.ApexOptions;
    } else {
      return {
        ...options,
        ...{
          [type]: {
            ...options[type],
            text: (options[type] as any)?.original,
            original: '',
          },
        },
      } as ApexCharts.ApexOptions;
    }
  };

  if (!options.title && !options.subtitle) return null;
  return (
    <div>
      {options.title && (
        <div>
          <p>{translations.titleVisibility}</p>
          {['hide', 'show'].map((v, index) => (
            <div key={index}>
              <input
                type="radio"
                id={index.toString()}
                value={v}
                name="title-visibility"
                checked={v === 'hide' ? !titleVisible : !!titleVisible}
                onChange={(e) => {
                  const newVisibility = e.target.value as 'show' | 'hide';
                  onChange(getTitleObject(options, 'title', newVisibility));
                }}
              />
              <label htmlFor={v}>{translations[v]}</label>
              <br />
            </div>
          ))}
        </div>
      )}
      {options.subtitle && (
        <div>
          <p>{translations.subtitleVisibility}</p>
          {['hide', 'show'].map((v, index) => (
            <div key={index}>
              <input
                type="radio"
                id={index.toString()}
                value={v}
                name="visibility"
                checked={v === 'hide' ? !subtitleVisible : !!subtitleVisible}
                onChange={(e) => {
                  const newVisibility = e.target.value as 'show' | 'hide';
                  onChange(getTitleObject(options, 'subtitle', newVisibility));
                }}
              />
              <label htmlFor={v}>{translations[v]}</label>
              <br />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TitleVisibility;
