
import PageHeader from "@/components/common/PageHeader";
import EarningsSummary from "./sections/EarningsSummary";
import EarningsChart from "./sections/EarningsChart";
import EarningsHistory from "./sections/EarningsHistory";

export default function EarningsPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="My Earnings"
        description="Track your income, incentives and payouts."
      />
      <EarningsSummary />
      <EarningsChart />
      <EarningsHistory />
    </div>
  );
}
