import { useState, type ReactNode } from "react";
import { EditorContext, EditorContextType } from "./EditorContext";

interface EditorProviderProps {
  children: ReactNode;
}

export function EditorProvider({ children }: EditorProviderProps) {
  const [code, setCode] = useState<EditorContextType["code"]>(
    "console.log('Hello JSDash');",
  );

  const [language, setLanguage] =
    useState<EditorContextType["language"]>("typescript");

  return (
    <EditorContext.Provider value={{ code, setCode, language, setLanguage }}>
      {children}
    </EditorContext.Provider>
  );
}
