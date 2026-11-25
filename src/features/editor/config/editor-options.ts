import type { EditorProps } from "@monaco-editor/react";

export const EDITOR_OPTIONS: EditorProps["options"] = {
  // Typography
  fontFamily: "'JetBrains Mono', monospace",
  fontSize: 14,
  lineHeight: 22,
  tabSize: 2,

  // Layout
  automaticLayout: true,
  minimap: { enabled: false },
  scrollBeyondLastLine: false,
  wordWrap: "on",
  padding: { top: 8, bottom: 8 },

  // Editing
  formatOnPaste: true,
  quickSuggestions: true,
  parameterHints: { enabled: true },

  // Cursor
  cursorBlinking: "smooth",
  smoothScrolling: true,

  // Visuals
  renderLineHighlight: "line",
  bracketPairColorization: { enabled: true },
  guides: {
    indentation: true,
    bracketPairs: true,
  },

  // Scrollbar
  scrollbar: {
    vertical: "hidden",
    horizontal: "hidden",
    verticalScrollbarSize: 0,
    horizontalScrollbarSize: 0,
    alwaysConsumeMouseWheel: false,
  },
  overviewRulerLanes: 0,
  overviewRulerBorder: false,
  hideCursorInOverviewRuler: true,
};
