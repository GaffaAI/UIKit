import React, { useEffect, useState } from "react";
import CodeMirror, { Extension } from "@uiw/react-codemirror";
import { json, jsonParseLinter } from "@codemirror/lang-json";
import { githubLight } from "@uiw/codemirror-theme-github";
import { hyperLinkExtension, hyperLinkStyle } from "./CustomCodeEditorLink";
import { linter, lintGutter } from "@codemirror/lint";
import { EditorView } from "@codemirror/view";
import { EditorState } from "@codemirror/state";

import { markdown } from "@codemirror/lang-markdown";
import { languages } from "@codemirror/language-data";
// Removed unused import

interface CodeEditorProps {
  value: string;
  onChange?: (value: string, isValid: boolean) => void;
  readOnly?: boolean;
  showLineNumbers?: boolean;
  showFoldGutter?: boolean;
  disableLint?: boolean;
  language?: "json" | "markdown";
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
  );
};
