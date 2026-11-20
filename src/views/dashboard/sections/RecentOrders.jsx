
import Link from "next/link";
import { ArrowRight, MapPin, Package, Clock3 } from "lucide-react";

const orders = [
  {
    id: "BW-10245",
    customer: "Rahul Sharma",
    address: "Andheri East, Mumbai",
    items: 4,
    amount: 540,
    status: "Out for Delivery",
    time: "10:30 AM",
  },
  {
    id: "BW-10244",
    customer: "Priya Patel",
    address: "Marol, Mumbai",
    items: 3,
    amount: 320,
    status: "Picked Up",
    time: "10:15 AM",
  },
  {
    id: "BW-10243",
    customer: "Amit Verma",
    address: "Chakala, Mumbai",
    items: 5,
    amount: 680,
    status: "Delivered",
    time: "09:45 AM",
  },
];

const statusStyles = {
  "Out for Delivery": "bg-orange-50 text-orange-600",
  "Picked Up": "bg-blue-50 text-blue-600",
  Delivered: "bg-green-50 text-green-700",
};

export default function RecentOrders() {
  return (
    <section className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
      <div className="flex items-center justify-between gap-3 border-b border-gray-100 p-5 sm:p-6">
        <div>
          <h2 className="text-lg font-bold text-gray-900">
            Recent Deliveries
          </h2>
          <p className="mt-1 text-xs text-gray-500">
            Your latest delivery activity
          </p>
        </div>

        <Link
          href="/dashboard/history"
          className="flex items-center gap-1 text-xs font-bold text-[#16833b] hover:underline"
        >
          View All <ArrowRight size={15} />
        </Link>
      </div>

      <div className="divide-y divide-gray-100">
        {orders.map((order) => (
          <div
            key={order.id}
            className="flex flex-col gap-3 p-5 transition hover:bg-gray-50/70 sm:flex-row sm:items-center sm:justify-between sm:px-6"
          >
            <div className="flex items-start gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#eaf7ee] text-[#16833b]">
                <Package size={20} />
              </div>

              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-sm font-bold text-gray-900">
                    {order.id}
                  </h3>
                  <span
                    className={`rounded-full px-2.5 py-1 text-[10px] font-bold ${
                      statusStyles[order.status]
                    }`}
                  >
                    {order.status}
                  </span>
                </div>

                <p className="mt-1 text-sm font-medium text-gray-700">
                  {order.customer}
                </p>

                <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-gray-400">
                  <span className="flex items-center gap-1">
                    <MapPin size={12} /> {order.address}
                  </span>
                  <span className="flex items-center gap-1">
                    <Package size={12} /> {order.items} items
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock3 size={12} /> {order.time}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between border-t border-gray-100 pt-3 sm:block sm:border-0 sm:pt-0 sm:text-right">
              <p className="text-xs text-gray-400">Order Amount</p>
              <p className="text-base font-extrabold text-gray-900">
                ₹{order.amount}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
