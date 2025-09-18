import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { GitHubIcon } from "../icons/GitHub";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    onClick: { action: "clicked" },
  },
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Primary Button",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary Button",
    variant: "secondary",
  },
};

export const PrimaryOutline: Story = {
  args: {
    children: "Primary Outline",
    variant: "primaryOutline",
  },
};

export const SecondaryOutline: Story = {
  args: {
    children: "Secondary Outline",
    variant: "secondaryOutline",
  },
};

export const Text: Story = {
  args: {
    children: "Text Button",
    variant: "text",
  },
};

export const TextSecondary: Story = {
  args: {
    children: "Text Secondary",
    variant: "textSecondary",
  },
};

export const Sizes: Story = {
  render: (args) => (
    <div className="flex gap-4 flex-col max-w-[100px]">
      <Button {...args} size="s">
        Small
      </Button>
      <Button {...args} size="m">
        Medium
      </Button>
      <Button {...args} size="l">
        Large
      </Button>
    </div>
  ),
  args: {
    variant: "primary",
    children: "Button",
  },
};

export const WithIcon: Story = {
  args: {
    children: "With Icon",
    startIcon: <GitHubIcon />,

    variant: "primary",
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled",
    variant: "primary",
  },
};
