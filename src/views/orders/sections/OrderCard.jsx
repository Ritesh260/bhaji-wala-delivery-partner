
import Link from "next/link";
import {
  MapPin,
  Package,
  Clock3,
  IndianRupee,
  ChevronRight,
  Phone,
} from "lucide-react";

const statusStyles = {
  New: "bg-orange-50 text-orange-700",
  Accepted: "bg-blue-50 text-blue-700",
  "Picked Up": "bg-purple-50 text-purple-700",
  Delivered: "bg-green-50 text-green-700",
};

export default function OrderCard({ order }) {
  return (
    <article className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm transition hover:shadow-md sm:p-5">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-gray-100 pb-4">
        <div>
          <p className="text-[11px] font-medium text-gray-400">ORDER ID</p>
          <h3 className="mt-1 text-sm font-extrabold text-gray-900">{order.id}</h3>
        </div>
        <span className={`rounded-full px-3 py-1.5 text-[10px] font-bold ${statusStyles[order.status] || "bg-gray-100 text-gray-600"}`}>
          {order.status}
        </span>
      </div>

      <div className="py-4">
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#eaf7ee] text-[#16833b]">
            <Package size={19} />
          </div>
          <div className="min-w-0 flex-1">
            <h4 className="text-sm font-bold text-gray-900">{order.customer}</h4>
            <p className="mt-1 text-xs text-gray-500">{order.items} items in this order</p>
          </div>
          <p className="text-sm font-extrabold text-gray-900">₹{order.amount}</p>
        </div>

        <div className="mt-4 space-y-2.5">
          <p className="flex items-start gap-2 text-xs leading-5 text-gray-500">
            <MapPin size={15} className="mt-0.5 shrink-0 text-[#16833b]" />
            {order.address}
          </p>
          <p className="flex items-center gap-2 text-xs text-gray-500">
            <Clock3 size={15} className="text-[#16833b]" />
            {order.time}
          </p>
          {order.phone && (
            <p className="flex items-center gap-2 text-xs text-gray-500">
              <Phone size={15} className="text-[#16833b]" />
              {order.phone}
            </p>
          )}
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-gray-100 pt-4">
        <span className="text-xs font-medium text-gray-400">Delivery details</span>
        <Link
          href={`/dashboard/orders/${order.id}`}
          className="flex items-center gap-1 rounded-lg bg-[#eaf7ee] px-3 py-2 text-xs font-bold text-[#16833b] hover:bg-[#dff1e5]"
        >
          View Details <ChevronRight size={15} />
        </Link>
      </div>
    </article>
  );
}
