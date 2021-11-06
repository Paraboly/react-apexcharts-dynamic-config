import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import ReactApexDynamicConfig, { Props } from '../src';

const meta: Meta = {
  title: 'ReactApexDynamicConfig',
  component: ReactApexDynamicConfig,
};

export default meta;

const Template: Story<Props> = (args) => {
  const [options, setOptions] = useState({ ...args.options });
  const onOptionsChange = (newOptions) => {
    setOptions(newOptions);
  }
  return <ReactApexDynamicConfig options={options} onChange={onOptionsChange} />;
};

export const Default = Template.bind({});

Default.args = {
  options: {
    labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
    legend: {
      position: "bottom" as "bottom"
    }
  }
};
