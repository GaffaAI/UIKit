import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { CustomCodeEditor } from "./CustomCodeEditor";

const meta: Meta<typeof CustomCodeEditor> = {
  title: "Components/CodeEditor",
  component: CustomCodeEditor,
  argTypes: {
    value: { control: "text" },
    readOnly: { control: "boolean" },
    showLineNumbers: { control: "boolean" },
    showFoldGutter: { control: "boolean" },
    disableLint: { control: "boolean" },
  },
};
export default meta;

type Story = StoryObj<typeof CustomCodeEditor>;

export const Default: Story = {
  args: {
    value: '{\n  "name": "Gaffa",\n  "type": "UI Library"\n}',
    readOnly: false,
    showLineNumbers: true,
    showFoldGutter: true,
    disableLint: false,
  },
};

export const ReadOnly: Story = {
  args: {
    value: '{\n  "readOnly": true\n}',
    readOnly: true,
    showLineNumbers: true,
    showFoldGutter: true,
    disableLint: false,
  },
};

export const WithLintDisabled: Story = {
  args: {
    value: '{\n  "lint": false\n}',
    readOnly: false,
    showLineNumbers: true,
    showFoldGutter: true,
    disableLint: true,
  },
};

export const Controlled: Story = {
  render: (args) => {
    const [value, setValue] = useState(args.value);
    const [isValid, setIsValid] = useState(true);
    return (
      <div>
        <CustomCodeEditor
          {...args}
          value={value}
          onChange={(val, valid) => {
            setValue(val);
            setIsValid(valid);
          }}
        />
        <div style={{ marginTop: 8 }}>
          <strong>Valid JSON:</strong> {isValid ? "Yes" : "No"}
        </div>
      </div>
    );
  },
  args: {
    value: '{\n  "controlled": true\n}',
    readOnly: false,
    showLineNumbers: true,
    showFoldGutter: true,
    disableLint: false,
  },
};

export const MarkdownExample: Story = {
  args: {
    value: `# Heading 1
## Heading 2
### Heading 3

This is a paragraph of **bold text** and *italic text*. You can also use ***bold and italic text***.

- Unordered list item 1
- Unordered list item 2
    - Nested item

1. Ordered list item 1
2. Ordered list item 2

> This is a blockquote. It can span multiple lines.

This is an inline \`code snippet\`.

\`\`\`python
def example_function():
    print("This is a code block.")
\`\`\`
`,
    readOnly: false,
    showLineNumbers: true,
    showFoldGutter: false,
    disableLint: true,
    language: "markdown",
  },
  render: (args) => <CustomCodeEditor {...args} />,
};
