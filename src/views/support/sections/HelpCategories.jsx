
"use client";

import {
  Wallet,
  Bike,
  ClipboardList,
  UserRound,
  FileText,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";

const categories = [
  {
    title: "Earnings & Payments",
    description: "Earnings, payouts and payment issues",
    icon: Wallet,
    color: "bg-green-100 text-green-700",
    search: "payment",
  },
  {
    title: "Orders & Deliveries",
    description: "Order assignment, pickup and delivery",
    icon: ClipboardList,
    color: "bg-blue-100 text-blue-700",
    search: "order",
  },
  {
    title: "Vehicle Related",
    description: "Vehicle details and document updates",
    icon: Bike,
    color: "bg-orange-100 text-orange-700",
    search: "vehicle",
  },
  {
    title: "Account & Profile",
    description: "Login, profile and account information",
    icon: UserRound,
    color: "bg-purple-100 text-purple-700",
    search: "account",
  },
  {
    title: "Documents & Verification",
    description: "KYC, approval and document verification",
    icon: FileText,
    color: "bg-amber-100 text-amber-700",
    search: "document",
  },
  {
    title: "Safety & Security",
    description: "Safety concerns and account security",
    icon: ShieldCheck,
    color: "bg-red-100 text-red-700",
    search: "safety",
  },
];

export default function HelpCategories({ onSelect }) {
  return (
    <section>
      <div className="mb-5">
        <h2 className="text-xl font-bold text-gray-900">
          Browse Help Topics
        </h2>
        <p className="mt-1 text-sm text-gray-500">
          Select a category to find the help you need.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {categories.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.title}
              type="button"
              onClick={() => onSelect(item.search)}
              className="group flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-5 text-left transition hover:-translate-y-1 hover:border-green-300 hover:shadow-lg hover:shadow-green-900/5"
            >
              <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${item.color}`}>
                <Icon size={23} />
              </div>

              <div className="min-w-0 flex-1">
                <h3 className="font-bold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs leading-5 text-gray-500">
                  {item.description}
                </p>
              </div>

              <ChevronRight
                size={19}
                className="shrink-0 text-gray-400 transition group-hover:translate-x-1 group-hover:text-green-700"
              />
            </button>
          );
        })}
      </div>
    </section>
  );
}
