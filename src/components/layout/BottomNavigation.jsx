
"use client";

import { Suspense } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Package,
  Wallet,
  UserRound,
} from "lucide-react";

const items = [
  { label: "Home", href: "/dashboard", icon: Home },
  { label: "Orders", href: "/dashboard/orders", icon: Package },
  { label: "Earnings", href: "/dashboard/earnings", icon: Wallet },
  { label: "Profile", href: "/dashboard/profile", icon: UserRound },
];

function BottomNavigationContent() {
  const pathname = usePathname();

  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-4 border-t border-gray-100 bg-white px-2 pb-[max(env(safe-area-inset-bottom),8px)] pt-2 shadow-[0_-5px_20px_rgba(0,0,0,0.04)] lg:hidden">
      {items.map((item) => {
        const Icon = item.icon;

        const active =
          pathname === item.href ||
          (item.href !== "/dashboard" &&
            pathname.startsWith(item.href));

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex flex-col items-center gap-1 rounded-xl py-1.5 text-[10px] font-semibold transition ${
              active ? "text-[#16833b]" : "text-gray-400"
            }`}
          >
            <div
              className={`flex h-8 w-12 items-center justify-center rounded-full ${
                active ? "bg-[#eaf7ee]" : ""
              }`}
            >
              <Icon size={20} strokeWidth={active ? 2.5 : 1.8} />
            </div>

            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}

export default function BottomNavigation() {
  return (
    <Suspense fallback={null}>
      <BottomNavigationContent />
    </Suspense>
  );
}
