import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Input, InputProps } from "./Input";
import { Search, Eye, AlertCircle } from "lucide-react";

const meta: Meta<InputProps> = {
  title: "Components/Input",
  component: Input,
  argTypes: {
    label: { control: "text" },
    error: { control: "text" },
    startIcon: { control: false },
    endIcon: { control: false },
  },
};
export default meta;

type Story = StoryObj<InputProps>;

export const Default: Story = {
  args: {
    label: "Username",
    placeholder: "Enter your username",
  },
};

export const WithStartIcon: Story = {
  args: {
    label: "Search",
    placeholder: "Search...",
    startIcon: <Search size={18} />,
  },
};

export const WithEndIcon: Story = {
  args: {
    label: "Password",
    placeholder: "Enter your password",
    endIcon: <Eye size={18} />,
  },
};

export const ErrorState: Story = {
  args: {
    label: "Email",
    placeholder: "Enter your email",
    error: "Invalid email address",
    endIcon: <AlertCircle size={18} className="text-red" />,
  },
};

export const FullExample: Story = {
  args: {
    label: "Search",
    placeholder: "Type something...",
    startIcon: <Search size={18} />,
    endIcon: <Eye size={18} />,
    error: "Something went wrong",
  },
};
