import { useEditor } from "../../features/editor/hooks/useEditor";

function StatusBar() {
  const { language } = useEditor();

  return (
    <footer className="h-6 border-t border-[#181825] bg-[#0c0c16] px-3 flex items-center justify-between text-xs text-gray-400 select-none">
      <div className="flex items-center gap-2">
        <span className="inline-block w-2 h-2 rounded-full bg-emerald-500"></span>
        <span>Listo</span>
      </div>
      <div>{language} / Node.js</div>
    </footer>
  );
}

export default StatusBar;
