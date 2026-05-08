
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { useEffect, useState } from "react";
import { getDashboardData } from "../../api/dashboardApi";
import { useNavigate } from "react-router-dom";

import {
  BookOpen,
  CalendarDays,
  Users,
  FileText,
  MapPin,
  Clock3,
  Calendar,
  Newspaper,
  UserCog,

} from "lucide-react";

function Dashboard() {
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);
const navigate = useNavigate();
  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const data = await getDashboardData();
        if (data.success) setDashboardData(data);
      } catch (err) {
        console.error("Dashboard fetch error:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchDashboard();
  }, []);

  const stats = [
    {
      title: "Total Journals",
      value: loading ? "..." : String(dashboardData?.stats?.totalJournals ?? 0),
      increase: "3",
      icon: <BookOpen size={22} />,
    },
    {
      title: "Total Events",
      value: loading ? "..." : String(dashboardData?.stats?.totalEvents ?? 0),
      increase: "2",
      icon: <CalendarDays size={22} />,
    },
    {
      title: "Total Members",
      value: "512",
      increase: "28",
      icon: <Users size={22} />,
    },
    {
      title: "Memberships",
      value: "142",
      increase: "11",
      icon: <FileText size={22} />,
    },
  ];

  // Use API data for recent journals, fall back to static display data
  const journals = dashboardData?.recentJournals?.length
    ? dashboardData.recentJournals.map((j) => ({
        name: j.title,
        issn: j.eissn ? `ISSN: ${j.eissn}` : "",
        status: j.status || "Published",
        time: new Date(j.createdAt).toLocaleDateString(),
        color: "bg-[#0b2f68]",
      }))
    : [
    {
      name: "Journal of Indian Mathematics",
      issn: "ISSN: 0970-3773",
      status: "Published",
      time: "2 days ago",
      color: "bg-[#0b2f68]",
    },
    {
      name: "Proceedings of MRI India",
      issn: "ISSN: 2321-2406",
      status: "Published",
      time: "4 days ago",
      color: "bg-[#1f5b37]",
    },
    {
      name: "Annals of Mathematical Sciences",
      issn: "ISSN: 2582-1299",
      status: "Published",
      time: "1 week ago",
      color: "bg-[#4b1f92]",
    },
    {
      name: "Indian Journal of Applied Mathematics",
      issn: "ISSN: 2394-1558",
      status: "Draft",
      time: "1 week ago",
      color: "bg-[#003f8a]",
    },
    {
      name: "Computational Mathematics Review",
      issn: "ISSN: 2582-1302",
      status: "Draft",
      time: "2 weeks ago",
      color: "bg-[#a13d14]",
    },
  ];

  // Use API data for upcoming events, fall back to static
  const upcomingEvents = dashboardData?.recentEvents?.length
    ? dashboardData.recentEvents.map((e) => {
        const d = new Date(e.date);
        return {
          day: String(d.getDate()).padStart(2, "0"),
          month: d.toLocaleString("en", { month: "short" }).toUpperCase(),
          year: String(d.getFullYear()),
          type: e.eventType || "EVENT",
          title: e.title,
          location: e.location || "TBD",
          date: d.toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" }),
        };
      })
    : [
    {
      day: "15",
      month: "JUN",
      year: "2025",
      type: "CONFERENCE",
      title: "International Conference on Number Theory and its Applications",
      location: "Bengaluru, India",
      date: "15 – 18 June 2025",
    },
    {
      day: "22",
      month: "JUN",
      year: "2025",
      type: "SEMINAR",
      title: "MRI Colloquium Talk by Prof. Manjul Bhargava",
      location: "Online (Zoom)",
      date: "22 June 2025, 5:00 PM IST",
    },
    {
      day: "05",
      month: "JUL",
      year: "2025",
      type: "WORKSHOP",
      title: "Workshop on Algebraic Topology and its Applications",
      location: "TIFR, Mumbai, India",
      date: "5 – 9 July 2025",
    },
  ];

 const quickActions = [
    {
      label: "Add Journal",
      onClick: () => navigate("/dashboard/journals"),
      icon: <BookOpen size={18} />,
    },
    {
      label: "Add Event",
      onClick: () => navigate("/dashboard/events"),
      icon: <Calendar size={18} />,
    },
    {
      label: "Manage",
      onClick: () => navigate("/dashboard/manage"),
      icon: <UserCog size={18} />,
    },
    {
      label: "Add News",
      onClick: () => navigate("/dashboard/news"),
      icon: <Newspaper size={18} />,
    },
  ];

  const activities = [
    {
      text: 'New journal "Journal of Indian Mathematics" published.',
      time: "2 days ago",
      color: "bg-[#3dbb58]",
    },
    {
      text: 'Event "Lecture Series on Mathematical Physics" updated.',
      time: "3 days ago",
      color: "bg-[#297cff]",
    },
    {
      text: 'New member "Dr. Ananya Sharma" registered.',
      time: "5 days ago",
      color: "bg-[#f1a400]",
    },
    {
      text: 'Banner "International Conference 2025" updated.',
      time: "6 days ago",
      color: "bg-[#7c3aed]",
    },
  ];

  return (
    <div className="h-screen w-full overflow-hidden bg-[#f7f7f7] flex">
      {/* SIDEBAR */}
      {/* <div className="w-[230px] min-w-[230px] h-screen border-r border-[#ececec] bg-black"> */}
        <Sidebar />
      {/* </div> */}

      {/* RIGHT SIDE */}
      <div className="flex-1 h-screen flex flex-col overflow-hidden">
        {/* TOPBAR */}
        <Topbar />

        {/* BODY */}
        <div className="flex-1 overflow-y-auto px-5 py-3">
          {/* HEADER */}
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-[24px] font-serif text-[#111] font-semibold">
                Dashboard
              </h1>

              <p className="mt-1 text-[13px] text-[#666]">
                Welcome back,{" "}
                <span className="font-semibold">Super Admin!</span> Here's
                what's happening with MRI India.
              </p>
            </div>

            <button className="h-[42px] rounded-xl border border-[#e8e8e8] bg-white px-4 text-sm font-medium text-[#444] shadow-sm flex items-center gap-2">
              <CalendarDays size={16} />
              May 20 – May 26, 2025
            </button>
          </div>

          {/* STATS */}
          <div className="mt-3 grid grid-cols-4 gap-3">
            {stats.map((item, index) => (
              <div
                key={index}
                className="rounded-xl border border-[#ececec] bg-white p-5 shadow-[0_2px_8px_rgba(0,0,0,0.03)]"
              >
               <div className="flex items-start gap-4">
  {/* LEFT SIDE ICON */}
  <div className="flex h-14 w-14 min-w-[56px] items-center justify-center rounded-full bg-[#fbf7ee] text-[#c79a2e]">
    {item.icon}
  </div>

  {/* RIGHT SIDE CONTENT */}
  <div>
    <p className="text-[13px] font-medium text-[#1a1919]">
      {item.title}
    </p>

    <h2 className="mt-1 text-[20px] leading-none font-semibold text-[#111] ">
      {item.value}
    </h2>

    <div className="mt-2 flex items-center gap-2 text-xs">
      <span className="font-semibold text-[#22a447]">
        ↑ {item.increase}
      </span>

      <span className="text-[#8d8d8d]">
        from last 7 days
      </span>
    </div>
  </div>
</div>
              </div>
            ))}
          </div>

          {/* MAIN GRID */}
          <div className="mt-3 grid grid-cols-12 gap-3">
            {/* LEFT SIDE */}
            <div className="col-span-6 flex flex-col gap-4">
              {/* OVERVIEW */}
              <div className="rounded-xl border border-[#ececec] bg-white p-5 shadow-[0_2px_8px_rgba(0,0,0,0.03)]">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-[18px] font-semibold text-[#111]">
                      Overview
                    </h3>

                    <div className="mt-3 flex items-center gap-6">
                      <div className="flex items-center gap-2 text-sm text-[#555]">
                        <span className="h-[3px] w-5 rounded-full bg-[#c79a2e]" />
                        Journals
                      </div>

                      <div className="flex items-center gap-2 text-sm text-[#555]">
                        <span className="h-[3px] w-5 rounded-full bg-[#222]" />
                        Events
                      </div>
                    </div>
                  </div>

                  <button className="h-[38px] rounded-lg border border-[#ececec] px-4 text-sm text-[#555]">
                    Last 7 Days
                  </button>
                </div>

                {/* GRAPH */}
                <div className="relative mt-3 h-[260px]">
                  {/* HORIZONTAL LINES */}
                  <div className="absolute inset-0 flex flex-col justify-between">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="border-t border-[#f1f1f1]"></div>
                    ))}
                  </div>

                  {/* VERTICAL LINES */}
                  <div className="absolute inset-0 flex justify-between">
                    {[...Array(7)].map((_, i) => (
                      <div
                        key={i}
                        className="border-l border-[#f5f5f5] h-full"
                      ></div>
                    ))}
                  </div>

                  {/* GOLD GRAPH */}
                  <svg
                    viewBox="0 0 600 220"
                    className="absolute inset-0 w-full h-full"
                    preserveAspectRatio="none"
                  >
                    <polyline
                      fill="none"
                      stroke="#c79a2e"
                      strokeWidth="3"
                      points="30,150 120,130 210,100 300,120 390,70 480,115 570,80"
                    />

                    {[
                      [30, 150],
                      [120, 130],
                      [210, 100],
                      [300, 120],
                      [390, 70],
                      [480, 115],
                      [570, 80],
                    ].map((point, index) => (
                      <circle
                        key={index}
                        cx={point[0]}
                        cy={point[1]}
                        r="5"
                        fill="#c79a2e"
                      />
                    ))}
                  </svg>

                  {/* BLACK GRAPH */}
                  <svg
                    viewBox="0 0 600 220"
                    className="absolute inset-0 w-full h-full"
                    preserveAspectRatio="none"
                  >
                    <polyline
                      fill="none"
                      stroke="#1e1e1e"
                      strokeWidth="3"
                      points="30,190 120,165 210,145 300,160 390,130 480,165 570,145"
                    />

                    {[
                      [30, 190],
                      [120, 165],
                      [210, 145],
                      [300, 160],
                      [390, 130],
                      [480, 165],
                      [570, 145],
                    ].map((point, index) => (
                      <circle
                        key={index}
                        cx={point[0]}
                        cy={point[1]}
                        r="5"
                        fill="#1e1e1e"
                      />
                    ))}
                  </svg>

                  {/* DATES */}
                  <div className="absolute bottom-0 left-0 flex w-full justify-between px-2 text-xs text-[#888]">
                    <span>May 20</span>
                    <span>May 21</span>
                    <span>May 22</span>
                    <span>May 23</span>
                    <span>May 24</span>
                    <span>May 25</span>
                    <span>May 26</span>
                  </div>
                </div>
              </div>

              {/* UPCOMING EVENTS */}
              <div className="rounded-2xl border border-[#ececec] bg-white p-5 shadow-[0_2px_8px_rgba(0,0,0,0.03)]">
                <div className="mb-5 flex items-center justify-between">
                  <h3 className="text-[18px] font-semibold text-[#111]">
                    Upcoming Events
                  </h3>

                 <button
  onClick={() => navigate("/dashboard/events")}
  className="text-sm font-medium text-[#c79a2e]"
>
  View All
</button>
                </div>

                <div className="space-y-3">
                  {upcomingEvents.map((event, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 border-b border-[#f3f3f3] pb-3 last:border-none last:pb-0"
                    >
                      {/* DATE */}
                      <div className="w-[45px] h-[66px] rounded-md border border-[#ececec] overflow-hidden shrink-0">
                        <div className="h-[50px] flex flex-col items-center justify-center bg-white">
                          <span className="text-[14px] leading-none font-bold text-[#111]">
                            {event.day}
                          </span>

                          <span className="mt-1 text-[11px] font-semibold text-[#777]">
                            {event.month}
                          </span>
                        </div>

                        <div className=" bg-[#c79a2e] flex items-center justify-center text-[10px] font-semibold text-white">
                          {event.year}
                        </div>
                      </div>

                      {/* CONTENT */}
                      <div className="flex-1">
                        <p className="text-[10px] font-serif tracking-wide text-[#3f7cff]">
                          {event.type}
                        </p>

                        <h4 className="mt-1 text-[13px] font-serif text-black font-semibold">
                          {event.title}
                        </h4>

                        <div className="mt-1 flex items-center gap-5 text-[11px] text-[#777]">
                          <div className="flex items-center gap-2">
                            <MapPin size={14} />
                            {event.location}
                          </div>

                          <div className="flex items-center gap-2">
                            <Clock3 size={14} />
                            {event.date}
                          </div>
                        </div>
                      </div>

                      <span className="rounded-full bg-[#eaf8ed] px-4 py-2 text-xs font-semibold text-[#4ea66a]">
                        Upcoming
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="col-span-6 flex flex-col gap-3">
              {/* RECENT JOURNALS */}
              <div className="rounded-2xl border border-[#ececec] bg-white p-3 shadow-[0_2px_8px_rgba(0,0,0,0.03)]">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-[18px] font-semibold text-[#111]">
                    Recent Journals
                  </h3>

                  <button 
                  onClick={() => navigate("/dashboard/journals")}
                  className="text-sm font-medium text-[#c79a2e]">
                    View All
                  </button>
                </div>

                <div className="space-y-4">
                  {journals.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div
                        className={`h-[40px] w-[30px] rounded-md ${item.color}`}
                      />

                      <div className="flex-1">
                        <h4 className="text-[12px] font-semibold text-[#111] font-serif">
                          {item.name}
                        </h4>

                        <p className="mt-1 text-[12px] text-[#777]">
                          {item.issn}
                        </p>
                      </div>

                      <div className="text-right">
                        <span
                          className={`rounded-full px-3 py-1 text-[11px] font-semibold ${
                            item.status === "Published"
                              ? "bg-[#eaf8ed] text-[#4ea66a]"
                              : "bg-[#fff5e7] text-[#d88a18]"
                          }`}
                        >
                          {item.status}
                        </span>

                        <p className="mt-2 text-[12px] text-[#888]">
                          {item.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* QUICK ACTIONS */}
              <div className="rounded-2xl border border-[#ececec] bg-white p-5 shadow-[0_2px_8px_rgba(0,0,0,0.03)]">
  <h3 className="mb-4 text-[18px] font-semibold text-[#111]">
    Quick Actions
  </h3>

  <div className="grid grid-cols-4 gap-3">
    {quickActions.map((action, index) => (
      <button
        key={index}
        onClick={action.onClick}
        className="h-[52px] rounded-xl border border-[#ececec] bg-white px-3 text-[12px] font-medium text-[#444] flex items-center justify-center gap-2 hover:bg-[#fafafa] transition-all duration-300"
      >
        <span className="text-[#c79a2e] flex items-center justify-center">
          {action.icon}
        </span>

        <span className="whitespace-nowrap">
          {action.label}
        </span>
      </button>
    ))}
  </div>
</div>

              {/* RECENT ACTIVITY */}
              <div className="rounded-2xl border border-[#ececec] bg-white p-5 flex-1 shadow-[0_2px_8px_rgba(0,0,0,0.03)]">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-[18px] font-semibold text-[#111]">
                    Recent Activity
                  </h3>

                  <button className="text-sm font-medium text-[#c79a2e]">
                    View All
                  </button>
                </div>

                <div className="space-y-3">
                  {activities.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start justify-between gap-4"
                    >
                      <div className="flex gap-2">
                        <span
                          className={`mt-[7px] h-2.5 w-2.5 rounded-full ${item.color}`}
                        />

                        <p className="text-[14px] leading-[24px] text-[#555]">
                          {item.text}
                        </p>
                      </div>

                      <span className="whitespace-nowrap text-[12px] text-[#888]">
                        {item.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* FOOTER */}
          <div className="mt-3 flex items-center justify-between text-[12px] text-[#777] pb-2">
            <p>
              © 2025 Mathematical Research Institute of India. All Rights
              Reserved.
            </p>

            <div className="flex items-center gap-5">
              <button>Privacy Policy</button>
              <button>Terms of Use</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;






