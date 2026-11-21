import { useState, type ReactNode } from "react";
import { EditorContext } from "./EditorContext";

interface EditorProviderProps {
  children: ReactNode;
}

export function EditorProvider({ children }: EditorProviderProps) {
  const [code, setCode] = useState("console.log('Hello JSDash');");

  return (
    <EditorContext.Provider value={{ code, setCode }}>
      {children}
    </EditorContext.Provider>
  );
}
