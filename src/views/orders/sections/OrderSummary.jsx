
import { MapPin, Phone, Package, IndianRupee } from "lucide-react";

export default function OrderSummary({ order }) {
  return (
    <div className="space-y-5">
      <section className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
        <h2 className="font-bold text-gray-900">Customer Details</h2>
        <div className="mt-4 flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#eaf7ee] font-bold text-[#16833b]">
            {order.customer.charAt(0)}
          </div>
          <div>
            <p className="text-sm font-bold text-gray-900">{order.customer}</p>
            <p className="mt-1 text-xs text-gray-500">{order.phone}</p>
          </div>
        </div>
        <div className="mt-4 border-t border-gray-100 pt-4">
          <p className="flex items-start gap-2 text-sm leading-6 text-gray-600">
            <MapPin size={17} className="mt-1 shrink-0 text-[#16833b]" />
            {order.address}
          </p>
          <a href={`tel:${order.phone}`} className="mt-4 inline-flex items-center gap-2 rounded-lg bg-[#eaf7ee] px-3 py-2 text-xs font-bold text-[#16833b]">
            <Phone size={15} /> Call Customer
          </a>
        </div>
      </section>

      <section className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
        <h2 className="font-bold text-gray-900">Order Information</h2>
        <div className="mt-4 space-y-3">
          {order.products.map((item) => (
            <div key={item.name} className="flex items-center justify-between gap-3 text-sm">
              <span className="text-gray-600">{item.name} × {item.qty}</span>
              <span className="font-semibold text-gray-900">₹{item.price * item.qty}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-4">
          <span className="text-sm font-semibold text-gray-600">Order Total</span>
          <span className="flex items-center text-lg font-extrabold text-gray-900">
            <IndianRupee size={17} />{order.amount}
          </span>
        </div>
        <p className="mt-2 flex items-center gap-2 text-xs text-gray-400">
          <Package size={14} /> {order.products.length} product types
        </p>
      </section>
    </div>
  );
}
