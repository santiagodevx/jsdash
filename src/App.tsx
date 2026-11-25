import CodeEditor from "./features/editor/components/CodeEditor";
import { EditorProvider } from "./features/editor/context/EditorProvider";
import Layout from "./components/layout/Layout";
import OutputPanel from "./features/runtime/components/OutputPanel";
import "./App.css";

export default function App() {
  return (
    <EditorProvider>
      <Layout
        editor={<CodeEditor />}
        output={<OutputPanel />}
      />
    </EditorProvider>
  );
}
