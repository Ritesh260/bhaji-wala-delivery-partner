
"use client";

import { Suspense } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Package,
  Wallet,
  History,
  Bell,
  UserRound,
  Headset,
  LogOut,
  Leaf,
} from "lucide-react";

const menuItems = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "My Orders", href: "/dashboard/orders", icon: Package },
  { label: "My Earnings", href: "/dashboard/earnings", icon: Wallet },
  { label: "Delivery History", href: "/dashboard/history", icon: History },
  { label: "Notifications", href: "/dashboard/notifications", icon: Bell },
  { label: "My Profile", href: "/dashboard/profile", icon: UserRound },
];

function SidebarContent() {
  const pathname = usePathname();

  return (
    <aside className="fixed inset-y-0 left-0 z-40 hidden w-[260px] flex-col border-r border-gray-100 bg-white lg:flex">
      <div className="flex h-[82px] items-center gap-3 border-b border-gray-100 px-6">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#16833b] text-white">
          <Leaf size={25} />
        </div>

        <div>
          <h2 className="text-xl font-extrabold tracking-tight text-[#16833b]">
            BhajiWala
          </h2>
          <p className="text-[11px] font-medium tracking-wider text-gray-400">
            DELIVERY PARTNER
          </p>
        </div>
      </div>

      <div className="px-5 pt-7">
        <p className="mb-3 px-3 text-[10px] font-bold uppercase tracking-[1.5px] text-gray-400">
          Main Menu
        </p>

        <nav className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;

            const active =
              pathname === item.href ||
              (item.href !== "/dashboard" &&
                pathname.startsWith(item.href));

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold transition ${
                  active
                    ? "bg-[#eaf7ee] text-[#16833b]"
                    : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                }`}
              >
                <Icon size={19} />
                {item.label}

                {item.label === "Notifications" && (
                  <span className="ml-auto h-2 w-2 rounded-full bg-orange-500" />
                )}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="mt-auto p-5">
        <div className="mb-4 rounded-2xl bg-[#f1f8f3] p-4">
          <div className="mb-2 flex items-center gap-2 text-[#16833b]">
            <Headset size={18} />
            <span className="text-sm font-bold">Need Help?</span>
          </div>

          <p className="text-xs leading-5 text-gray-500">
            Our support team is here to help you.
          </p>

          <button className="mt-3 text-xs font-bold text-[#16833b]">
            Contact Support →
          </button>
        </div>

        <button className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold text-red-500 transition hover:bg-red-50">
          <LogOut size={19} />
          Logout
        </button>

        <p className="mt-4 text-center text-[10px] text-gray-400">
          BhajiWala Partner App · v1.0
        </p>
      </div>
    </aside>
  );
}

export default function Sidebar() {
  return (
    <Suspense fallback={null}>
      <SidebarContent />
    </Suspense>
  );
}
