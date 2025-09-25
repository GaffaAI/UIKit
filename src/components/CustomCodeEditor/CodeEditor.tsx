import React, { useEffect, useState } from "react";
import CodeMirror, { Extension } from "@uiw/react-codemirror";
import { json, jsonParseLinter } from "@codemirror/lang-json";
import { githubLight } from "@uiw/codemirror-theme-github";
import { hyperLinkExtension, hyperLinkStyle } from "./CodeEditorLink";
import { linter, lintGutter } from "@codemirror/lint";
import { EditorView } from "@codemirror/view";
import { EditorState } from "@codemirror/state";
import { Copy } from "lucide-react";
import { markdown } from "@codemirror/lang-markdown";
import { languages } from "@codemirror/language-data";

export interface CodeEditorProps {
  value: string;
  onChange?: (value: string, isValid: boolean) => void;
  readOnly?: boolean;
  showLineNumbers?: boolean;
  showFoldGutter?: boolean;
  disableLint?: boolean;
  language?: "json" | "markdown";
  copy?: boolean;
}

export const hyperLink: Extension = [
  hyperLinkExtension({
    regexp: /https?:\/\/[^\s"']+/gi,
    handle: (url) => url,
  }),
  hyperLinkStyle,
];

export const CodeEditor: React.FC<CodeEditorProps> = ({
  value,
  onChange,
  readOnly = false,
  showLineNumbers = true,
  showFoldGutter = true,
  disableLint = false,
  language = "json",
  copy = false,
}) => {
  const [mounted, setMounted] = useState(false);
  const [formattedValue, setFormattedValue] = useState(value);

  useEffect(() => {
    setMounted(true);
    if (language === "json") {
      try {
        const parsed = JSON.parse(value);
        setFormattedValue(JSON.stringify(parsed, null, 2));
        if (onChange) {
          onChange(JSON.stringify(parsed, null, 2), true);
        }
      } catch (error) {
        setFormattedValue(value);
        if (onChange) {
          onChange(value, false);
        }
      }
    } else {
      setFormattedValue(value);
      if (onChange) {
        onChange(value, true);
      }
    }
  }, [value, onChange, language]);

  if (!mounted) {
    return null;
  }

  const handleChange = (value: string) => {
    if (onChange) {
      if (language === "json") {
        try {
          JSON.parse(value);
          onChange(value, true);
        } catch (error) {
          onChange(value, false);
        }
      } else {
        onChange(value, true);
      }
    }
  };

  const extensions: Extension[] = [hyperLink, EditorView.lineWrapping];
  if (language === "json") {
    extensions.unshift(json());
    if (!disableLint) {
      extensions.push(linter(jsonParseLinter()));
    }
    if (showFoldGutter) {
      extensions.push(lintGutter());
    }
  } else if (language === "markdown") {
    extensions.unshift(markdown({ codeLanguages: languages }));
  }

  if (readOnly) {
    extensions.push(EditorState.readOnly.of(true));
  }

  return (
    <div className="relative">
      {copy && (
        <Copy
          onClick={() => {
            navigator.clipboard.writeText(formattedValue);
          }}
          strokeWidth={1.5}
          className="z-10 absolute top-2 right-2 cursor-pointer text-black-600 hover:text-black-500 w-6 h-6"
        />
      )}
      <CodeMirror
        value={formattedValue}
        theme={githubLight}
        extensions={extensions}
        onChange={handleChange}
        basicSetup={{
          lineNumbers: showLineNumbers,
          highlightActiveLine: !readOnly,
          foldGutter: showFoldGutter,
          tabSize: 2,
        }}
      />
    </div>
  );
};
