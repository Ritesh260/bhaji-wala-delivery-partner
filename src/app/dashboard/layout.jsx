
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import BottomNavigation from "@/components/layout/BottomNavigation";

import api from "@/api/axios";
import { logoutDeliveryPartner } from "@/api/auth_apis";

export default function DashboardLayout({ children }) {
  const router = useRouter();
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const verifyPartner = async () => {
      const token =
        typeof window !== "undefined"
          ? localStorage.getItem("deliveryPartnerToken")
          : null;

      if (!token) {
        router.replace("/login");
        return;
      }

      try {
        const response = await api.get("/delivery-partners/me");

        const partner =
          response.data?.data || response.data?.partner || response.data;

        const status = partner?.applicationStatus?.toLowerCase();

        if (status !== "approved") {
          logoutDeliveryPartner();
          router.replace("/login");
          return;
        }

        if (isMounted) {
          setAuthorized(true);
          setCheckingAuth(false);
        }
      } catch (error) {
        logoutDeliveryPartner();
        router.replace("/login");
      }
    };

    verifyPartner();

    return () => {
      isMounted = false;
    };
  }, [router]);

  if (checkingAuth || !authorized) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#f6f8f6]">
        <div className="text-center">
          <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-[#16833b] border-t-transparent" />

          <p className="mt-4 text-sm font-medium text-gray-500">
            Verifying your account...
          </p>
        </div>
      </div>
    );
  }

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
