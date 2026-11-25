import Logo from "../../assets/logo.svg";

function AppHeader() {
  return (
    <header className="h-11 px-4 border-b border-[#232338] bg-linear-to-r from-[#121222] via-[#0e0e1a] to-[#09090f] flex items-center select-none shadow-[0_4px_20px_-4px_rgba(0,0,0,0.5)]">
      <div className="flex items-center gap-2.5">
        <img
          src={Logo}
          alt="JSDash Logo"
          className="h-6 w-auto drop-shadow-[0_0_10px_rgba(129,83,242,0.65)]"
        />
        <h1 className="text-[13px] font-semibold tracking-wide text-white">
          <span className="text-[#a78bfa] font-extrabold drop-shadow-[0_0_10px_rgba(167,139,250,0.4)]">
            JS
          </span>
          <span className="text-gray-100">Dash</span>
        </h1>
      </div>
    </header>
  );
}

export default AppHeader;
