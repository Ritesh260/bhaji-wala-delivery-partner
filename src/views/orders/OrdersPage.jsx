
"use client";

import { useMemo, useState } from "react";
import { Search, Package, RefreshCw } from "lucide-react";
import PageHeader from "@/components/common/PageHeader";
import OrderTabs from "./sections/OrderTabs";
import OrderCard from "./sections/OrderCard";

const demoOrders = [
  {
    id: "BW-10245",
    customer: "Rahul Sharma",
    phone: "9876543210",
    address: "Flat 302, Marol, Andheri East, Mumbai",
    items: 4,
    amount: 540,
    status: "New",
    time: "Today, 10:30 AM",
  },
  {
    id: "BW-10244",
    customer: "Priya Patel",
    phone: "9876543211",
    address: "Building 4, Chakala, Andheri East, Mumbai",
    items: 3,
    amount: 320,
    status: "Accepted",
    time: "Today, 10:15 AM",
  },
  {
    id: "BW-10243",
    customer: "Amit Verma",
    phone: "9876543212",
    address: "MIDC Road, Andheri East, Mumbai",
    items: 5,
    amount: 680,
    status: "Picked Up",
    time: "Today, 09:45 AM",
  },
  {
    id: "BW-10242",
    customer: "Neha Shah",
    phone: "9876543213",
    address: "Sakinaka, Mumbai",
    items: 2,
    amount: 250,
    status: "Delivered",
    time: "Today, 09:20 AM",
  },
];

export default function OrdersPage() {
  const [activeTab, setActiveTab] = useState("All");
  const [search, setSearch] = useState("");
  const [orders, setOrders] = useState(demoOrders);

  const counts = useMemo(() => ({
    All: orders.length,
    New: orders.filter((o) => o.status === "New").length,
    Accepted: orders.filter((o) => o.status === "Accepted").length,
    "Picked Up": orders.filter((o) => o.status === "Picked Up").length,
    Delivered: orders.filter((o) => o.status === "Delivered").length,
  }), [orders]);

  const filteredOrders = orders.filter((order) => {
    const matchesTab = activeTab === "All" || order.status === activeTab;
    const matchesSearch =
      order.id.toLowerCase().includes(search.toLowerCase()) ||
      order.customer.toLowerCase().includes(search.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const resetDemo = () => {
    setOrders(demoOrders);
    setActiveTab("All");
    setSearch("");
  };

  return (
    <div className="space-y-6">
      <PageHeader
        title="My Orders"
        description="Manage your assigned delivery orders."
        action={
          <button onClick={resetDemo} className="flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-xs font-bold text-gray-600 hover:bg-gray-50">
            <RefreshCw size={15} /> Refresh
          </button>
        }
      />

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {[
          ["New Orders", counts.New],
          ["Accepted", counts.Accepted],
          ["Picked Up", counts["Picked Up"]],
          ["Delivered", counts.Delivered],
        ].map(([label, value]) => (
          <div key={label} className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
            <p className="text-xs text-gray-500">{label}</p>
            <h3 className="mt-2 text-2xl font-extrabold text-gray-900">{value}</h3>
          </div>
        ))}
      </div>

      <div className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm sm:p-5">
        <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <OrderTabs activeTab={activeTab} onChange={setActiveTab} counts={counts} />

          <div className="flex min-w-0 items-center gap-2 rounded-xl border border-gray-200 px-3 py-2.5 sm:w-64">
            <Search size={17} className="shrink-0 text-gray-400" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search order or customer"
              className="w-full min-w-0 text-xs outline-none"
            />
          </div>
        </div>

        {filteredOrders.length ? (
          <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
            {filteredOrders.map((order) => (
              <OrderCard key={order.id} order={order} />
            ))}
          </div>
        ) : (
          <div className="py-16 text-center">
            <Package size={38} className="mx-auto text-gray-300" />
            <h3 className="mt-3 font-bold text-gray-800">No orders found</h3>
            <p className="mt-1 text-sm text-gray-400">Try another filter or search term.</p>
          </div>
        )}
      </div>
    </div>
  );
}
