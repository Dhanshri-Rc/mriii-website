import {
  LayoutDashboard,
  BookOpen,
  CalendarDays,
  Megaphone,
  Image,
  HelpCircle,
  BadgeCheck,
  Users,
  FileText,
  File,
  Menu,
  Settings,
  ShieldCheck,
  ChevronDown,
} from "lucide-react";

import { NavLink } from "react-router-dom";

import logo from "../../assets/edited_logo.png";

function Sidebar() {
  return (
    <div className="h-screen w-[230px] bg-[#050505] text-white border-r border-[#151515] flex flex-col justify-between relative overflow-hidden">
      {/* BACKGROUND EFFECT */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#C9960C_1px,transparent_1px)] bg-[length:20px_20px]" />

      {/* TOP */}
      <div className="relative z-10 flex flex-col h-full">
        {/* LOGO */}
        <div className="px-4 pt-4 pb-2 border-b border-[#161616] shrink-0">
          <img
            src={logo}
            alt="logo"
            className="w-[180px] object-contain"
          />
        </div>

        {/* MENU */}
        <div className="flex-1 px-4 pt-2 pb-2 flex flex-col justify-between">
          <div>

            {/* DASHBOARD */}
            <SidebarItem
              icon={<LayoutDashboard size={18} />}
              text="Dashboard"
              to="/dashboard"
            />

            {/* CONTENT MANAGEMENT */}
            <div className="mt-3">
              <p className="px-2 mb-1 text-[10px] uppercase tracking-[1.3px] text-[#6e6e6e] font-semibold">
                Content Management
              </p>

              <div className="space-y-[1px]">
                <SidebarItem
                  icon={<BookOpen size={17} />}
                  text="Journals"
                  to="/dashboard/journals"
                />

                <SidebarItem
                  icon={<CalendarDays size={17} />}
                  text="Events"
                  to="/dashboard/events"
                />

                <SidebarItem
                  icon={<Megaphone size={17} />}
                  text="News & Announcements"
                  to="/dashboard/news"
                />

                <SidebarItem
                  icon={<Image size={17} />}
                  text="Banners"
                  to="/dashboard/banners"
                />

                <SidebarItem
                  icon={<HelpCircle size={17} />}
                  text="FAQs"
                  to="/faqs"
                />
              </div>
            </div>

            {/* MEMBERSHIP */}
            <div className="mt-3">
              <p className="px-2 mb-1 text-[10px] uppercase tracking-[1.3px] text-[#6e6e6e] font-semibold">
                Membership Management
              </p>

              <div className="space-y-[1px]">
                <SidebarItem
                  icon={<BadgeCheck size={17} />}
                  text="Memberships"
                  to="/memberships"
                />

                <SidebarItem
                  icon={<Users size={17} />}
                  text="Members"
                  to="/members"
                />

                <SidebarItem
                  icon={<FileText size={17} />}
                  text="Applications"
                  to="/applications"
                />
              </div>
            </div>

            {/* SITE MANAGEMENT */}
            <div className="mt-3">
              <p className="px-2 mb-1 text-[10px] uppercase tracking-[1.3px] text-[#6e6e6e] font-semibold">
                Site Management
              </p>

              <div className="space-y-[1px]">
                <SidebarItem
                  icon={<File size={17} />}
                  text="Pages"
                  to="/pages"
                />

                <SidebarItem
                  icon={<Menu size={17} />}
                  text="Menus"
                  to="/menus"
                />

                <SidebarItem
                  icon={<Settings size={17} />}
                  text="Settings"
                  to="/settings"
                />

                <SidebarItem
                  icon={<Users size={17} />}
                  text="Users & Roles"
                  to="/users"
                />

                <SidebarItem
                  icon={<ShieldCheck size={17} />}
                  text="Audit Logs"
                  to="/audit-logs"
                />
              </div>
            </div>
          </div>

          {/* PROFILE */}
          <div className="pt-3">
            <div className="h-[68px] rounded-2xl border border-[#1d1d1d] bg-[#0d0d0d] px-4 flex items-center justify-between shadow-lg">
              <div className="flex items-center gap-3">

                <div className="h-11 w-11 rounded-full bg-gradient-to-br from-[#4b3308] to-[#1d1405] border border-[#5b3d09] flex items-center justify-center text-[#d4a323] shadow-md">
                  <ShieldCheck size={18} />
                </div>

                <div>
                  <h3 className="text-[14px] font-semibold text-white leading-none">
                    Super Admin
                  </h3>

                  <p className="mt-1 text-[11px] text-[#8a8a8a]">
                    superadmin@mriindia.org
                  </p>
                </div>
              </div>

              <ChevronDown
                size={16}
                className="text-[#7a7a7a]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* SIDEBAR ITEM */
const SidebarItem = ({ icon, text, to }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `group w-full h-[39px] rounded-xl flex items-center gap-3 px-3 transition-all duration-300 ${
          isActive
            ? "bg-[#111111]"
            : "hover:bg-[#111111]"
        }`
      }
    >
      <span className="text-[#c8c8c8] group-hover:text-[#d4a323]">
        {icon}
      </span>

      <span className="text-[13px] font-medium text-[#d7d7d7] group-hover:text-[#d4a323]">
        {text}
      </span>
    </NavLink>
  );
};

export default Sidebar;