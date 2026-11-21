import type { OnMount } from "@monaco-editor/react";
import { EDITOR_THEME, editorTheme } from "../config/editor-theme";

export function useCodeEditor() {
  const handleEditorMount: OnMount = (editor, monaco) => {
    monaco.editor.defineTheme(EDITOR_THEME, editorTheme);
    monaco.editor.setTheme(EDITOR_THEME);

    editor.focus();
  };

  return { handleEditorMount };
}
