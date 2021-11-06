import React, { useState } from 'react';
import { Props } from '..';

const TitleVisibility = ({ options, onChange }: Props) => {
  const visible = !!options.title?.text;
  const [prevTitleConfig, setPrevTitleConfig] = useState<ApexTitleSubtitle>();
  
  return (
    <div>
      <p>Title Visibility:</p>
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
          <label htmlFor={v}>{v}</label>
          <br />
        </div>
      ))}
    </div>
  );
};

export default TitleVisibility;
