import React, { useState } from 'react';
import { Props, TranslationsContext } from '..';

const TitleVisibility = ({ options, onChange }: Props) => {
  const translations = React.useContext(TranslationsContext);
  const [prevTitleConfig, setPrevTitleConfig] = useState<ApexTitleSubtitle>();
  const [
    prevSubtitleConfig,
    setPrevSubtitleConfig,
  ] = useState<ApexTitleSubtitle>();
  const titleVisible = !!options.title?.text;
  const subtitleVisible = !!options.subtitle?.text;

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
                  const newVisibility = e.target.value;
                  if (newVisibility === 'hide') {
                    setPrevTitleConfig({ ...options.title });
                    delete options.title;
                    onChange({
                      ...options,
                      ...{ title: { text: '' } },
                    });
                  } else {
                    onChange({ ...options, ...{ title: prevTitleConfig } });
                  }
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
                  const newVisibility = e.target.value;
                  if (newVisibility === 'hide') {
                    setPrevSubtitleConfig({ ...options.subtitle });
                    delete options.subtitle;
                    onChange({
                      ...options,
                      ...{ subtitle: { text: '' } },
                    });
                  } else {
                    onChange({
                      ...options,
                      ...{ subtitle: prevSubtitleConfig },
                    });
                  }
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
