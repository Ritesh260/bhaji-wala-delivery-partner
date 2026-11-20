
"use client";

import { useState } from "react";

const weeklyData = [
  { day: "Mon", amount: 420 },
  { day: "Tue", amount: 650 },
  { day: "Wed", amount: 380 },
  { day: "Thu", amount: 780 },
  { day: "Fri", amount: 550 },
  { day: "Sat", amount: 920 },
  { day: "Sun", amount: 850 },
];

const monthlyData = [
  { day: "Week 1", amount: 2800 },
  { day: "Week 2", amount: 3500 },
  { day: "Week 3", amount: 3100 },
  { day: "Week 4", amount: 3450 },
];

export default function EarningsChart() {
  const [period, setPeriod] = useState("week");
  const data = period === "week" ? weeklyData : monthlyData;
  const max = Math.max(...data.map((item) => item.amount));

  return (
    <section className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:p-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-lg font-bold text-gray-900">Earnings Overview</h2>
          <p className="mt-1 text-xs text-gray-500">Your earnings performance</p>
        </div>

        <div className="flex rounded-xl bg-gray-100 p-1">
          {["week", "month"].map((value) => (
            <button
              key={value}
              onClick={() => setPeriod(value)}
              className={`rounded-lg px-3 py-2 text-xs font-bold capitalize ${
                period === value ? "bg-white text-[#16833b] shadow-sm" : "text-gray-500"
              }`}
            >
              {value}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8 flex h-52 items-end justify-between gap-2 sm:gap-5">
        {data.map((item) => (
          <div key={item.day} className="flex h-full min-w-0 flex-1 flex-col items-center justify-end gap-2">
            <span className="text-[9px] font-semibold text-gray-400 sm:text-[11px]">
              ₹{item.amount}
            </span>
            <div className="flex h-[145px] w-full items-end justify-center">
              <div
                title={`₹${item.amount}`}
                className="w-full max-w-10 rounded-t-lg bg-[#16833b] transition-all hover:bg-[#11652e]"
                style={{ height: `${(item.amount / max) * 100}%` }}
              />
            </div>
            <span className="text-[10px] font-medium text-gray-400">{item.day}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
