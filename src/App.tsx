import CodeEditor from "./features/editor/components/CodeEditor";
import { EditorProvider } from "./features/editor/context/EditorProvider";

import "./App.css";

export default function App() {
  return (
    <EditorProvider>
      <div style={{ height: "100vh" }}>
        <CodeEditor></CodeEditor>
      </div>
    </EditorProvider>
  );
}
