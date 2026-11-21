import { createContext } from "react";

export interface EditorContextType {
  code: string;
  setCode: (code: string) => void;
}

export const EditorContext = createContext<EditorContextType | null>(null);
