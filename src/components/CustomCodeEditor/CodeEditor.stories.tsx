import type { Meta, StoryObj } from "@storybook/react";
import { CodeEditor } from "./CodeEditor";

const meta: Meta<typeof CodeEditor> = {
  title: "Components/CodeEditor",
  component: CodeEditor,
  argTypes: {
    onChange: { action: "changed" },
    value: { control: "text" },
    readOnly: { control: "boolean" },
    showLineNumbers: { control: "boolean" },
    showFoldGutter: { control: "boolean" },
    disableLint: { control: "boolean" },
    language: {
      control: { type: "select" },
      options: ["json", "markdown"],
    },
  },
};
export default meta;

type Story = StoryObj<typeof CodeEditor>;

export const JSONEditor: Story = {
  args: {
    value: '{\n  "name": "Gaffa",\n  "type": "UI Library"\n}',
    language: "json",
    showLineNumbers: true,
    showFoldGutter: true,
    disableLint: false,
    copy: true,
  },
};

export const MarkdownEditor: Story = {
  args: {
    value: "# Hello World\nThis is a markdown editor!",
    language: "markdown",
    showLineNumbers: true,
    showFoldGutter: false,
    disableLint: true,
  },
};

export const ReadOnly: Story = {
  args: {
    value: '{\n  "readOnly": true\n}',
    language: "json",
    readOnly: true,
  },
};
