import type { editor } from "monaco-editor";

export const EDITOR_THEME = "jsdash-dark";

export const editorTheme: editor.IStandaloneThemeData = {
  base: "vs-dark",
  inherit: true,

  rules: [
    { token: "comment", foreground: "4a5568", fontStyle: "italic" },
    { token: "keyword", foreground: "c678dd" },
    { token: "string", foreground: "98c379" },
    { token: "number", foreground: "d19a66" },
    { token: "type", foreground: "61afef" },
  ],

  colors: {
    "editor.background": "#09090f",
    "editor.foreground": "#abb2bf",
    "editorCursor.foreground": "#602ed2",
    "editorLineNumber.foreground": "#252540",
    "editorLineNumber.activeForeground": "#4a4a70",
    "editor.lineHighlightBackground": "#0e0e1a",
    "editor.selectionBackground": "#28305a",
    "editorWidget.background": "#0c0c18",
    "editorWidget.border": "#1a1a30",
    "editorSuggestWidget.background": "#0c0c18",
    "editorSuggestWidget.selectedBackground": "#1a1a35",
    focusBorder: "#602ed2",
  },
};
