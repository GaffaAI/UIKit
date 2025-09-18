import type { Meta, StoryObj } from "@storybook/react";
import { CATLink } from "./CATLink";

const meta: Meta<typeof CATLink> = {
  title: "Components/CATLink",
  component: CATLink,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "tertiary"],
    },
    iconVariant: {
      control: "select",
      options: ["arrow", "github"],
    },
    size: { control: "select", options: ["s", "m"] },
    children: { control: "text" },
    href: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof CATLink>;

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Primary Link",
    href: "#",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary Link",
    href: "#",
  },
};

export const Tertiary: Story = {
  args: {
    variant: "tertiary",
    children: "Tertiary Link",
    href: "#",
  },
};

export const Small: Story = {
  args: {
    size: "s",
    variant: "primary",
    children: "Small Link",
    href: "#",
  },
};

export const Medium: Story = {
  args: {
    size: "m",
    variant: "primary",
    children: "Medium Link",
    href: "#",
  },
};
