
import { ArrowUpRight, Wallet, IndianRupee, Clock3 } from "lucide-react";

export default function EarningsOverview() {
  return (
    <section className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
      <div className="flex flex-col justify-between gap-4 border-b border-gray-100 p-5 sm:flex-row sm:items-center sm:p-6">
        <div>
          <p className="text-sm font-semibold text-gray-500">
            Today's Earnings
          </p>

          <div className="mt-2 flex items-center gap-1">
            <IndianRupee size={25} className="text-gray-900" />
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
              850
            </h2>
          </div>

          <p className="mt-2 flex items-center gap-1 text-xs font-semibold text-green-600">
            <ArrowUpRight size={15} />
            Great work! Keep it going.
          </p>
        </div>

        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#eaf7ee] text-[#16833b]">
          <Wallet size={27} />
        </div>
      </div>

      <div className="grid grid-cols-2 divide-x divide-gray-100">
        <div className="p-5">
          <div className="flex items-center gap-2 text-gray-400">
            <Clock3 size={16} />
            <span className="text-xs font-medium">This Week</span>
          </div>
          <h3 className="mt-2 text-xl font-bold text-gray-900">₹4,250</h3>
        </div>

        <div className="p-5">
          <div className="flex items-center gap-2 text-gray-400">
            <Wallet size={16} />
            <span className="text-xs font-medium">This Month</span>
          </div>
          <h3 className="mt-2 text-xl font-bold text-gray-900">₹12,850</h3>
        </div>
      </div>
    </section>
  );
}
