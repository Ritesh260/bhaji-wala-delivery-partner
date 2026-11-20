
const tabs = [
  { label: "All Orders", value: "All" },
  { label: "New", value: "New" },
  { label: "Accepted", value: "Accepted" },
  { label: "Picked Up", value: "Picked Up" },
  { label: "Delivered", value: "Delivered" },
];

export default function OrderTabs({ activeTab, onChange, counts = {} }) {
  return (
    <div className="dashboard-scrollbar flex gap-2 overflow-x-auto pb-2">
      {tabs.map((tab) => (
        <button
          key={tab.value}
          onClick={() => onChange(tab.value)}
          className={`flex shrink-0 items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold transition ${
            activeTab === tab.value
              ? "bg-[#16833b] text-white shadow-sm"
              : "border border-gray-200 bg-white text-gray-500 hover:border-green-200 hover:text-[#16833b]"
          }`}
        >
          {tab.label}
          <span className={`rounded-full px-2 py-0.5 text-[10px] ${
            activeTab === tab.value ? "bg-white/20 text-white" : "bg-gray-100 text-gray-500"
          }`}>
            {counts[tab.value] ?? 0}
          </span>
        </button>
      ))}
    </div>
  );
}
