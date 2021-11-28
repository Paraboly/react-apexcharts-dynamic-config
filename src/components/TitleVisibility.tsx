import React, { useState } from 'react';
import { Props, TranslationsContext } from '..';

const TitleVisibility = ({ options, onChange }: Props) => {
  const translations = React.useContext(TranslationsContext); 
  const [prevTitleConfig, setPrevTitleConfig] = useState<ApexTitleSubtitle>();
  const visible = !!options.title?.text;
  
  return (
    <div>
      <p>{translations.titleVisibility}</p>
      {["hide", "show"].map((v, index) => (
        <div key={index}>
          <input
            type="radio"
            id={index.toString()}
            value={v}
            name="visibility"
            checked={v === "hide" ? !visible: !!visible}
            onChange={(e) => {
                const newVisibility = e.target.value;
                if(newVisibility === "hide") {
                    setPrevTitleConfig({...options.title});
                    delete options.title
                    onChange({
                        ...options,
                        ...{ title: { text: "" } },
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
  );
};

export default TitleVisibility;
