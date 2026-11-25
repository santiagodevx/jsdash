import CodeEditor from "./features/editor/components/CodeEditor";
import { EditorProvider } from "./features/editor/context/EditorProvider";

import "./App.css";
import Layout from "./components/layout/Layout";
import OutputPanel from "./features/runtime/components/OutputPanel";

export default function App() {
  return (
    <EditorProvider>
      <Layout>
        <CodeEditor></CodeEditor>
        <OutputPanel></OutputPanel>
      </Layout>
    </EditorProvider>
  );
}
