import { Select } from './Select';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Books/Web/Select',
  component: Select,
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    label: {
      options: ["選項1", "選項2", "選項3"],
      control: { type: "select" },
    },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    primary: true,
    label: "請選擇",
    options: ["選項1", "選項2", "選項3"],
  },
};

export const Secondary = {
  args: {
    label: "請選擇",
    options: ["選項1", "選項2", "選項3"],
  },
};

export const Large = {
  args: {
    size: 'large',
    label: "請選擇",
    options: ["選項1", "選項2", "選項3"],
  },
};

export const Small = {
  args: {
    size: 'small',
    label: "請選擇",
    options: ["選項1", "選項2", "選項3"],
  },
};

export const Warning = {
  args: {
    primary: true,
    label: 'Delete now',
    backgroundColor: 'red',
  }
};
