import { ReactNode } from "react";
import AppHeader from "./AppHeader";
import StatusBar from "./StatusBar";

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col h-screen w-screen overflow-hidden bg-[#09090f] text-gray-200">
      <AppHeader />
      <main className="flex-1 grid grid-cols-2 min-h-0 w-full overflow-hidden border-t border-[#1a1a2e]">
        {children}
      </main>
      <StatusBar />
    </div>
  );
}

export default Layout;
