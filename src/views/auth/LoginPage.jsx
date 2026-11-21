
"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Leaf,
  Phone,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  Bike,
} from "lucide-react";

import {
  loginDeliveryPartner,
  logoutDeliveryPartner,
} from "@/api/auth_apis";

export default function LoginPage() {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);

  const showMessage = (type, message) => {
    setToast({ type, message });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setToast(null);

    const value = identifier.trim();

    if (!value || !password) {
      showMessage(
        "error",
        "Please enter your mobile number or email and password."
      );
      return;
    }

    const isEmail = value.includes("@");

    if (isEmail) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailRegex.test(value)) {
        showMessage("error", "Please enter a valid email address.");
        return;
      }
    } else {
      const mobileRegex = /^[6-9]\d{9}$/;

      if (!mobileRegex.test(value)) {
        showMessage(
          "error",
          "Please enter a valid 10-digit mobile number or email."
        );
        return;
      }
    }

    try {
      setLoading(true);

      const response = await loginDeliveryPartner({
        identifier: value,
        password,
      });

      const status = (
        response.data?.applicationStatus ||
        response.data?.data?.applicationStatus ||
        ""
      ).toLowerCase();

      if (status === "approved") {
        showMessage("success", "Login successful! Redirecting...");

        router.replace("/dashboard");
        return;
      }

      // Pending or rejected partners should not keep an active login token.
      logoutDeliveryPartner();

      if (status === "pending") {
        showMessage(
          "info",
          "Your application is pending admin verification. Please wait for approval."
        );
      } else if (status === "rejected") {
        showMessage(
          "error",
          "Your application has been rejected. Please contact BhajiWala support."
        );
      } else {
        showMessage(
          "error",
          "Unable to verify your application status. Please try again."
        );
      }
    } catch (error) {
      logoutDeliveryPartner();

      const message =
        error.response?.data?.message ||
        "Unable to login. Please check your details and try again.";

      showMessage("error", message);
    } finally {
      setLoading(false);
    }
  };

  const toastStyles = {
    error: "border-red-200 bg-red-50 text-red-700",
    success: "border-green-200 bg-green-50 text-green-700",
    info: "border-yellow-200 bg-yellow-50 text-yellow-800",
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f4f8f4] px-4 py-10">
      <div className="grid w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-xl lg:grid-cols-2">

        {/* LEFT PANEL */}
        <div className="relative hidden flex-col justify-between overflow-hidden bg-gradient-to-br from-[#16833b] to-[#0c5728] p-10 text-white lg:flex">

          <div className="relative z-10 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15">
              <Leaf size={27} />
            </div>

            <div>
              <h1 className="text-2xl font-extrabold">BhajiWala</h1>
              <p className="text-xs tracking-widest text-white/70">
                DELIVERY PARTNER
              </p>
            </div>
          </div>

          <div className="relative z-10">
            <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-3xl bg-white/15">
              <Bike size={52} />
            </div>

            <h2 className="max-w-sm text-4xl font-extrabold leading-tight">
              Deliver fresh. Earn more. Grow with us.
            </h2>

            <p className="mt-4 max-w-sm text-sm leading-7 text-white/75">
              Your delivery journey starts here. Manage orders, track earnings
              and deliver happiness every day.
            </p>
          </div>

          <p className="relative z-10 text-xs text-white/60">
            © 2026 BhajiWala. All rights reserved.
          </p>

          <div className="absolute -bottom-24 -right-20 h-80 w-80 rounded-full border-[40px] border-white/5" />
          <div className="absolute -right-10 top-20 h-40 w-40 rounded-full bg-white/5" />
        </div>

        {/* RIGHT PANEL */}
        <div className="flex items-center justify-center p-6 sm:p-10 lg:p-12">
          <form onSubmit={handleLogin} className="w-full max-w-md">

            {/* HEADING */}
            <div className="mb-8 text-center lg:text-left">
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#eaf7ee] text-[#16833b] lg:hidden">
                <Leaf size={30} />
              </div>

              <p className="text-sm font-bold text-[#16833b]">
                WELCOME BACK
              </p>

              <h2 className="mt-2 text-3xl font-extrabold text-gray-900">
                Partner Login
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                Login to manage your deliveries.
              </p>
            </div>

            {/* TOAST MESSAGE */}
            {toast && (
              <div
                role="alert"
                className={`mb-5 rounded-xl border px-4 py-3 text-sm ${toastStyles[toast.type]}`}
              >
                {toast.message}
              </div>
            )}

            {/* MOBILE / EMAIL */}
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Mobile Number or Email
            </label>

            <div className="mb-5 flex items-center gap-3 rounded-xl border border-gray-200 px-4 py-3.5 transition focus-within:border-[#16833b]">
              <Phone size={19} className="shrink-0 text-gray-400" />

              <input
                type="text"
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                placeholder="Enter mobile number or email"
                autoComplete="username"
                className="w-full text-sm outline-none"
              />
            </div>

            {/* PASSWORD */}
            <div className="mb-2 flex items-center justify-between">
              <label className="text-sm font-semibold text-gray-700">
                Password
              </label>

              <Link
                href="/forgot-password"
                className="text-xs font-bold text-[#16833b] hover:underline"
              >
                Forgot Password?
              </Link>
            </div>

            <div className="flex items-center gap-3 rounded-xl border border-gray-200 px-4 py-3.5 transition focus-within:border-[#16833b]">
              <Lock size={19} className="shrink-0 text-gray-400" />

              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                autoComplete="current-password"
                className="w-full text-sm outline-none"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-gray-400"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <EyeOff size={19} />
                ) : (
                  <Eye size={19} />
                )}
              </button>
            </div>

            {/* LOGIN BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="mt-7 flex w-full items-center justify-center gap-2 rounded-xl bg-[#16833b] py-3.5 text-sm font-bold text-white transition hover:bg-[#11652e] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Logging in..." : "Login to Dashboard"}

              {!loading && <ArrowRight size={17} />}
            </button>

            {/* CREATE ACCOUNT */}
            <div className="mt-7 text-center">
              <p className="text-sm text-gray-500">
                New to BhajiWala?
              </p>

              <Link
                href="/register"
                className="mt-2 inline-flex items-center gap-2 font-bold text-[#16833b] transition hover:text-[#0c5728]"
              >
                Create Delivery Partner Account
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* TERMS */}
            <p className="mt-7 text-center text-xs leading-6 text-gray-400">
              By continuing, you agree to BhajiWala&apos;s
              <span className="font-semibold text-gray-600">
                {" "}Terms & Conditions{" "}
              </span>
              and Privacy Policy.
            </p>

          </form>
        </div>
      </div>
    </main>
  );
}
