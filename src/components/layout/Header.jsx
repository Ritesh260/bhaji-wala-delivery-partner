
"use client";

import { Bell, MapPin, Search } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-30 flex h-[72px] items-center justify-between border-b border-gray-100 bg-white/95 px-4 backdrop-blur sm:px-7 lg:px-9">
      <div>
        <div className="flex items-center gap-2 text-sm font-semibold text-gray-800">
          <MapPin size={17} className="text-[#16833b]" />
          Delivery Partner
        </div>
        <p className="mt-0.5 text-[11px] text-gray-400">
          BhajiWala Partner Panel
        </p>
      </div>

      <div className="hidden w-full max-w-[350px] items-center gap-2 rounded-xl bg-gray-50 px-4 py-3 md:flex">
        <Search size={17} className="text-gray-400" />
        <input
          type="text"
          placeholder="Search anything..."
          className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
        />
      </div>

      <div className="flex items-center gap-3 sm:gap-5">
        <Link
          href="/dashboard/notifications"
          className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gray-50 text-gray-600 hover:bg-green-50 hover:text-[#16833b]"
        >
          <Bell size={19} />
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full border-2 border-white bg-orange-500" />
        </Link>

        <div className="flex items-center gap-2.5">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#eaf7ee] text-sm font-bold text-[#16833b]">
            RM
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-bold text-gray-800">Rider Name</p>
            <p className="text-[11px] text-gray-400">Delivery Partner</p>
          </div>
        </div>
      </div>
    </header>
  );
}
