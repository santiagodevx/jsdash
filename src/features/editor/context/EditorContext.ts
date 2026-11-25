import { createContext } from "react";

export type EditorContextLanguage = "javascript" | "typescript";

export interface EditorContextType {
  code: string;
  setCode: (code: string) => void;

  language: EditorContextLanguage;
  setLanguage: (language: EditorContextLanguage) => void;
}

export const EditorContext = createContext<EditorContextType | null>(null);
