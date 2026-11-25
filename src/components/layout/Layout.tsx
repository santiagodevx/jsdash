import { ReactNode } from "react";
import { Group, Panel, Separator } from "react-resizable-panels";
import AppHeader from "./AppHeader";
import StatusBar from "./StatusBar";

interface LayoutProps {
  editor: ReactNode;
  output: ReactNode;
}

function Layout({ editor, output }: LayoutProps) {
  return (
    <div className="flex flex-col h-screen w-screen overflow-hidden bg-[#09090f] text-gray-200">
      <AppHeader />
      <main className="flex-1 min-h-0 w-full overflow-hidden border-t border-[#1a1a2e]">
        <Group orientation="horizontal" className="h-full w-full">
          <Panel id="editor-panel" defaultSize="55%" minSize="25%" className="min-w-0 h-full">
            {editor}
          </Panel>

          <Separator className="relative w-1.5 bg-[#121220] hover:bg-[#8153F2]/60 active:bg-[#8153F2] transition-colors cursor-col-resize group select-none flex items-center justify-center">
            <div className="w-0.5 h-6 rounded-full bg-gray-600 group-hover:bg-white group-active:bg-white transition-colors pointer-events-none" />
          </Separator>

          <Panel id="output-panel" defaultSize="45%" minSize="20%" className="min-w-0 h-full">
            {output}
          </Panel>
        </Group>
      </main>
      <StatusBar />
    </div>
  );
}

export default Layout;
