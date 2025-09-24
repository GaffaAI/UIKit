import type { Meta, StoryObj } from "@storybook/react";
import { Drawer } from "./Drawer";

const meta: Meta<typeof Drawer> = {
  title: "Components/Drawer",
  component: Drawer,
  argTypes: {
    onClose: { action: "closed" },
    isOpen: { control: "boolean" },
  },
};
export default meta;

type Story = StoryObj<typeof Drawer>;

export const Closed: Story = {
  args: {
    isOpen: false,
    children: <div className="p-4">Drawer Content</div>,
  },
};

export const WithLongContent: Story = {
  args: {
    isOpen: true,
    children: (
      <div className="p-4">
        <h2 className="mb-2">Long Content</h2>
        <p>
          {"Lorem ipsum dolor sit amet, consectetur adipiscing elit. "}
          {
            "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
          }
          {
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
          }
        </p>
      </div>
    ),
  },
};
