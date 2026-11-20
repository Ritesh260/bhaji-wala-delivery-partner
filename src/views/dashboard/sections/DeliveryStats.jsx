
import {
  PackageCheck,
  Bike,
  Target,
  Star,
} from "lucide-react";
import StatCard from "@/components/common/StatCard";

export default function DeliveryStats() {
  const stats = [
    {
      title: "Total Deliveries",
      value: "28",
      subtitle: "Completed today",
      icon: PackageCheck,
      color: "green",
    },
    {
      title: "Active Orders",
      value: "02",
      subtitle: "Currently assigned",
      icon: Bike,
      color: "orange",
    },
    {
      title: "Delivery Target",
      value: "28 / 35",
      subtitle: "7 more to reach target",
      icon: Target,
      color: "blue",
    },
    {
      title: "Your Rating",
      value: "4.8",
      subtitle: "Based on customer feedback",
      icon: Star,
      color: "purple",
    },
  ];

  return (
    <section className="grid grid-cols-2 gap-3 xl:grid-cols-4">
      {stats.map((stat) => (
        <StatCard key={stat.title} {...stat} />
      ))}
    </section>
  );
}
