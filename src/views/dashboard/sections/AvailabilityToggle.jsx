
"use client";

import { useState } from "react";
import { Power, ShieldCheck } from "lucide-react";

export default function AvailabilityToggle() {
  const [isOnline, setIsOnline] = useState(true);

  return (
    <section
      className={`overflow-hidden rounded-2xl p-5 text-white shadow-sm transition sm:p-6 ${
        isOnline
          ? "bg-gradient-to-r from-[#16833b] to-[#249d4e]"
          : "bg-gradient-to-r from-gray-700 to-gray-800"
      }`}
    >
      <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/15">
            <Power size={27} />
          </div>

          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-bold">
                {isOnline ? "You are Online" : "You are Offline"}
              </h2>
              <span
                className={`h-2.5 w-2.5 rounded-full ${
                  isOnline ? "bg-green-300" : "bg-gray-400"
                }`}
              />
            </div>

            <p className="mt-1 max-w-md text-sm text-white/80">
              {isOnline
                ? "You are available to receive new delivery orders."
                : "You won't receive new delivery assignments while offline."}
            </p>
          </div>
        </div>

        <button
          onClick={() => setIsOnline((previous) => !previous)}
          className={`flex min-w-[145px] items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-bold transition ${
            isOnline
              ? "bg-white text-[#16833b] hover:bg-green-50"
              : "bg-[#16833b] text-white hover:bg-[#11652e]"
          }`}
        >
          <Power size={17} />
          {isOnline ? "Go Offline" : "Go Online"}
        </button>
      </div>

      <div className="mt-5 flex items-center gap-2 border-t border-white/15 pt-4 text-xs text-white/80">
        <ShieldCheck size={16} />
        Your availability status can be changed anytime.
      </div>
    </section>
  );
}
