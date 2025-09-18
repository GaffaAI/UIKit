import type { Meta, StoryObj } from "@storybook/react";
import { PoweredByGaffa } from "./PoweredByGaffa";

const meta: Meta<typeof PoweredByGaffa> = {
  title: "Components/PoweredByGaffa",
  component: PoweredByGaffa,
  tags: ["autodocs"],
  argTypes: {
    className: {
      control: "text",
      description: "Custom class names for the root element.",
    },
  },
};
export default meta;

type Story = StoryObj<typeof PoweredByGaffa>;

export const Default: Story = {
  args: {
    className: "",
  },
};
