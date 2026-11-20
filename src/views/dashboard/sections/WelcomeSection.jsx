
import { MapPin, CalendarDays } from "lucide-react";

export default function WelcomeSection() {
  return (
    <section className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
      <div>
        <p className="text-sm font-semibold text-[#16833b]">
          Welcome back, Rider! 👋
        </p>
        <h1 className="mt-1 text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
          Your Dashboard
        </h1>
        <p className="mt-2 text-sm text-gray-500">
          Ready to make deliveries and earn more today?
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <div className="flex items-center gap-2 rounded-xl border border-gray-100 bg-white px-3 py-2.5 text-xs font-medium text-gray-600 shadow-sm">
          <CalendarDays size={16} className="text-[#16833b]" />
          Today
        </div>

        <div className="flex items-center gap-2 rounded-xl border border-gray-100 bg-white px-3 py-2.5 text-xs font-medium text-gray-600 shadow-sm">
          <MapPin size={16} className="text-[#16833b]" />
          Mumbai, India
        </div>
      </div>
    </section>
  );
}
