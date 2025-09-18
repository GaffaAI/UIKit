import { Tabs } from "./Tabs";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Tabs> = {
  title: "Components/Tabs",
  component: Tabs,
};

export default meta;

type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  args: {
    tabList: ["Tab 1", "Tab 2", "Tab 3"],
    className: "max-w-[200px]",
  },
};
