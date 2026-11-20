
import { ArrowDownLeft, CalendarDays, IndianRupee } from "lucide-react";

const transactions = [
  { id: "TXN-1001", date: "20 Nov 2026", description: "Delivery earnings", amount: 250, status: "Credited" },
  { id: "TXN-1002", date: "19 Nov 2026", description: "Delivery earnings", amount: 420, status: "Credited" },
  { id: "TXN-1003", date: "18 Nov 2026", description: "Weekly incentive", amount: 500, status: "Credited" },
  { id: "TXN-1004", date: "17 Nov 2026", description: "Delivery earnings", amount: 180, status: "Pending" },
];

export default function EarningsHistory() {
  return (
    <section className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
      <div className="border-b border-gray-100 p-5 sm:p-6">
        <h2 className="text-lg font-bold text-gray-900">Transaction History</h2>
        <p className="mt-1 text-xs text-gray-500">Your recent earning transactions</p>
      </div>

      <div className="divide-y divide-gray-100">
        {transactions.map((item) => (
          <div key={item.id} className="flex items-center justify-between gap-3 p-4 sm:px-6">
            <div className="flex min-w-0 items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#eaf7ee] text-[#16833b]">
                <ArrowDownLeft size={19} />
              </div>
              <div className="min-w-0">
                <p className="truncate text-sm font-bold text-gray-800">{item.description}</p>
                <p className="mt-1 flex items-center gap-1 text-[11px] text-gray-400">
                  <CalendarDays size={12} /> {item.date} · {item.id}
                </p>
              </div>
            </div>

            <div className="shrink-0 text-right">
              <p className="flex items-center justify-end text-sm font-extrabold text-gray-900">
                <IndianRupee size={14} />{item.amount}
              </p>
              <span className={`mt-1 inline-block text-[10px] font-bold ${
                item.status === "Credited" ? "text-green-600" : "text-orange-500"
              }`}>
                {item.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
