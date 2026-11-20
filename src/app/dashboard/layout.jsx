
import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import BottomNavigation from "@/components/layout/BottomNavigation";

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#f6f8f6]">
      <Sidebar />

      <div className="min-h-screen lg:pl-[260px]">
        <Header />

        <main className="mx-auto w-full max-w-[1600px] px-4 py-6 sm:px-7 sm:py-8 lg:px-9">
          {children}
        </main>
      </div>

      <BottomNavigation />
    </div>
  );
}
