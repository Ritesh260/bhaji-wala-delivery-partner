
"use client";

import { Search, Headset, MessageCircle } from "lucide-react";

export default function SupportHeader({ search, setSearch }) {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-[#126B39] p-6 text-white sm:p-9">
      <div className="relative z-10 max-w-2xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold text-green-50">
          <Headset size={15} />
          BHajiWala Partner Support
        </div>

        <h1 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl">
          How can we help
          <br className="hidden sm:block" /> you today?
        </h1>

        <p className="mt-3 max-w-lg text-sm leading-6 text-green-100 sm:text-base">
          Find answers, resolve issues and get help with your delivery
          partner account.
        </p>

        <div className="mt-7 flex max-w-xl items-center gap-3 rounded-2xl bg-white p-2 shadow-lg">
          <Search className="ml-2 shrink-0 text-gray-400" size={21} />

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for help..."
            className="min-w-0 flex-1 bg-transparent px-1 py-3 text-sm text-gray-800 outline-none placeholder:text-gray-400"
          />

          <div className="hidden rounded-xl bg-green-700 px-4 py-3 text-xs font-semibold text-white sm:block">
            Search
          </div>
        </div>

        <div className="mt-5 flex items-center gap-2 text-xs text-green-100">
          <MessageCircle size={15} />
          <span>Explore help topics or raise a support ticket</span>
        </div>
      </div>

      <div className="pointer-events-none absolute -right-16 -top-20 h-72 w-72 rounded-full border-[35px] border-white/5" />
      <div className="pointer-events-none absolute -bottom-32 right-20 h-64 w-64 rounded-full bg-white/5 blur-2xl" />
    </section>
  );
}
