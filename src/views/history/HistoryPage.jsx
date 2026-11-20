
"use client";

import { useState } from "react";
import { Search, CalendarDays, PackageCheck, MapPin, IndianRupee } from "lucide-react";
import PageHeader from "@/components/common/PageHeader";

const historyData = [
  { id: "BW-10242", customer: "Neha Shah", address: "Sakinaka, Mumbai", date: "20 Nov 2026", amount: 250, status: "Delivered" },
  { id: "BW-10239", customer: "Amit Verma", address: "Chakala, Mumbai", date: "20 Nov 2026", amount: 180, status: "Delivered" },
  { id: "BW-10230", customer: "Rahul Sharma", address: "Marol, Mumbai", date: "19 Nov 2026", amount: 320, status: "Delivered" },
  { id: "BW-10221", customer: "Priya Patel", address: "Andheri East, Mumbai", date: "19 Nov 2026", amount: 210, status: "Cancelled" },
  { id: "BW-10212", customer: "Karan Shah", address: "Powai, Mumbai", date: "18 Nov 2026", amount: 450, status: "Delivered" },
];

export default function HistoryPage() {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = historyData.filter((item) => {
    const matchesFilter = filter === "All" || item.status === filter;
    const matchesSearch = `${item.id} ${item.customer} ${item.address}`.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="space-y-6">
      <PageHeader
        title="Delivery History"
        description="View your completed and cancelled deliveries."
      />

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        <div className="rounded-2xl border border-gray-100 bg-white p-4">
          <p className="text-xs text-gray-500">Total Deliveries</p>
          <h3 className="mt-2 text-2xl font-extrabold text-gray-900">124</h3>
        </div>
        <div className="rounded-2xl border border-gray-100 bg-white p-4">
          <p className="text-xs text-gray-500">Completed</p>
          <h3 className="mt-2 text-2xl font-extrabold text-green-600">118</h3>
        </div>
        <div className="col-span-2 rounded-2xl border border-gray-100 bg-white p-4 sm:col-span-1">
          <p className="text-xs text-gray-500">Cancelled</p>
          <h3 className="mt-2 text-2xl font-extrabold text-red-500">06</h3>
        </div>
      </div>

      <section className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
        <div className="flex flex-col gap-3 border-b border-gray-100 p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5">
          <div className="flex gap-2">
            {["All", "Delivered", "Cancelled"].map((value) => (
              <button
                key={value}
                onClick={() => setFilter(value)}
                className={`rounded-lg px-3 py-2 text-xs font-bold ${
                  filter === value ? "bg-[#16833b] text-white" : "bg-gray-100 text-gray-500"
                }`}
              >
                {value}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 rounded-xl border border-gray-200 px-3 py-2.5 sm:w-64">
            <Search size={16} className="text-gray-400" />
            <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search deliveries" className="w-full text-xs outline-none" />
          </div>
        </div>

        <div className="divide-y divide-gray-100">
          {filtered.map((item) => (
            <div key={item.id} className="flex flex-col justify-between gap-3 p-4 sm:flex-row sm:items-center sm:px-5">
              <div className="flex min-w-0 items-start gap-3">
                <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
                  item.status === "Delivered" ? "bg-green-50 text-green-600" : "bg-red-50 text-red-500"
                }`}>
                  <PackageCheck size={19} />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-bold text-gray-900">{item.id} · {item.customer}</p>
                  <p className="mt-1 flex items-center gap-1 text-xs text-gray-500">
                    <MapPin size={13} /> {item.address}
                  </p>
                  <p className="mt-1 flex items-center gap-1 text-[11px] text-gray-400">
                    <CalendarDays size={12} /> {item.date}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between gap-3 sm:block sm:text-right">
                <span className={`rounded-full px-3 py-1 text-[10px] font-bold ${
                  item.status === "Delivered" ? "bg-green-50 text-green-700" : "bg-red-50 text-red-600"
                }`}>
                  {item.status}
                </span>
                <p className="mt-1 flex items-center justify-end text-sm font-extrabold text-gray-900">
                  <IndianRupee size={14} />{item.amount}
                </p>
              </div>
            </div>
          ))}

          {!filtered.length && (
            <p className="py-12 text-center text-sm text-gray-400">No delivery records found.</p>
          )}
        </div>
      </section>
    </div>
  );
}
