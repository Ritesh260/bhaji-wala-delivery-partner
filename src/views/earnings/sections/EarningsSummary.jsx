
import { Wallet, TrendingUp, Clock3, IndianRupee } from "lucide-react";

const cards = [
  { title: "Today's Earnings", amount: "₹850", note: "Today's total", icon: IndianRupee },
  { title: "This Week", amount: "₹4,250", note: "Weekly earnings", icon: TrendingUp },
  { title: "This Month", amount: "₹12,850", note: "Monthly earnings", icon: Wallet },
  { title: "Pending Payout", amount: "₹1,250", note: "Awaiting settlement", icon: Clock3 },
];

export default function EarningsSummary() {
  return (
    <div className="grid grid-cols-2 gap-3 xl:grid-cols-4">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div key={card.title} className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm sm:p-5">
            <div className="flex items-center justify-between gap-2">
              <p className="text-xs font-medium text-gray-500">{card.title}</p>
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#eaf7ee] text-[#16833b]">
                <Icon size={18} />
              </div>
            </div>
            <h3 className="mt-3 text-2xl font-extrabold text-gray-900">{card.amount}</h3>
            <p className="mt-1 text-[11px] text-gray-400">{card.note}</p>
          </div>
        );
      })}
    </div>
  );
}
