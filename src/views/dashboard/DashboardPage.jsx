
import WelcomeSection from "./sections/WelcomeSection";
import AvailabilityToggle from "./sections/AvailabilityToggle";
import EarningsOverview from "./sections/EarningsOverview";
import DeliveryStats from "./sections/DeliveryStats";
import RecentOrders from "./sections/RecentOrders";

export default function DashboardPage() {
  return (
    <div className="space-y-6 sm:space-y-7">

      {/* Welcome */}
      <WelcomeSection />

      {/* Online / Offline */}
      <AvailabilityToggle />

      {/* Earnings and Delivery Stats */}
      <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
        <div className="xl:col-span-1">
          <EarningsOverview />
        </div>

        <div className="xl:col-span-2">
          <div className="mb-3">
            <h2 className="text-lg font-bold text-gray-900">
              Delivery Overview
            </h2>
            <p className="mt-1 text-xs text-gray-500">
              Your performance at a glance
            </p>
          </div>

          <DeliveryStats />
        </div>
      </div>

      {/* Recent Deliveries */}
      <RecentOrders />

    </div>
  );
}
