
import {
  Menu,
  Search,
  Bell,
  ChevronDown,
} from "lucide-react";

function Topbar() {
  return (
    <div className="w-full h-[72px] bg-white border-b border-[#ececec] px-4 md:px-6 flex items-center justify-between">
      {/* LEFT */}
      <div className="flex items-center">
        {/* MENU BUTTON */}
        <button className="h-10 w-10 rounded-lg flex items-center justify-center hover:bg-[#f5f5f5] transition-all duration-300">
          <Menu size={20} className="text-[#666]" />
        </button>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-3 md:gap-5">
        {/* SEARCH */}
        <div className="hidden sm:flex items-center w-[240px] md:w-[320px] h-[40px] border border-[#e6e6e6] rounded-lg px-3 bg-white">
          <Search size={16} className="text-[#999]" />

          <input
            type="text"
            placeholder="Search anything..."
            className="w-full bg-transparent outline-none border-none text-sm text-[#444] placeholder:text-[#a0a0a0] px-2"
          />
        </div>

        {/* NOTIFICATION */}
        <button className="relative h-10 w-10 rounded-full flex items-center justify-center hover:bg-[#f6f6f6] transition-all duration-300">
          <Bell size={18} className="text-[#777]" />

          {/* BADGE */}
          <span className="absolute top-[7px] right-[7px] h-[16px] w-[16px] rounded-full bg-[#c8921d] text-white text-[10px] font-semibold flex items-center justify-center border border-white">
            3
          </span>
        </button>

        {/* PROFILE */}
        <button className="flex items-center gap-3 hover:bg-[#f7f7f7] px-2 py-2 rounded-xl transition-all duration-300">
          {/* AVATAR */}
          <div className="h-9 w-9 rounded-full bg-[#f2ede3] flex items-center justify-center text-[#7c7468] text-xs font-semibold">
            SA
          </div>

          {/* USER INFO */}
          <div className="hidden md:block text-left">
            <h3 className="text-sm font-semibold text-[#222] leading-none">
              Super Admin
            </h3>
          </div>

          {/* DROPDOWN */}
          <ChevronDown size={16} className="text-[#777]" />
        </button>
      </div>
    </div>
  );
}

export default Topbar;