
import { ArrowUpRight } from "lucide-react";

export default function StatCard({
  title,
  value,
  subtitle,
  icon: Icon,
  color = "green",
  trend,
}) {
  const colors = {
    green: "bg-green-50 text-green-700",
    orange: "bg-orange-50 text-orange-600",
    blue: "bg-blue-50 text-blue-600",
    purple: "bg-purple-50 text-purple-600",
  };

  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm sm:p-5">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500">{title}</p>
          <h3 className="mt-2 text-2xl font-bold tracking-tight text-gray-900">
            {value}
          </h3>
        </div>

        <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${colors[color]}`}>
          {Icon && <Icon size={21} />}
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between gap-2">
        <p className="text-xs text-gray-500">{subtitle}</p>

        {trend && (
          <span className="flex items-center gap-1 text-xs font-semibold text-green-600">
            <ArrowUpRight size={14} />
            {trend}
          </span>
        )}
      </div>
    </div>
  );
}
