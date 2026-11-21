import Editor from "@monaco-editor/react";
import { useEditor } from "../hooks/useEditor";
import { useCodeEditor } from "../hooks/useCodeEditor";
import { EDITOR_OPTIONS } from "../config/editor-options";
import { EDITOR_THEME } from "../config/editor-theme";
import "./editor-splash.css";

function CodeEditor() {
  const { code, setCode } = useEditor();
  const { handleEditorMount } = useCodeEditor();

  return (
    <div className="code-editor">
      <Editor
        height="100%"
        language="javascript"
        theme={EDITOR_THEME}
        value={code}
        onChange={(value) => setCode(value ?? "")}
        options={EDITOR_OPTIONS}
        onMount={handleEditorMount}
        loading={null}
      />
      <div className="editor-splash" aria-hidden="true" />
    </div>
  );
}

export default CodeEditor;
