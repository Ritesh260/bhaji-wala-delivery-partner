
"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Leaf,
  Clock3,
  CheckCircle2,
  XCircle,
  FileCheck,
  UserRound,
  ShieldCheck,
  ArrowRight,
  RefreshCw,
  Headset,
  Bike,
  LogOut,
} from "lucide-react";

export default function ApplicationStatusPage() {
  // Demo status: pending, approved or rejected
  const [status, setStatus] = useState("pending");

  const applicationId = "BW-DP-2026-00125";

  const statusConfig = {
    pending: {
      title: "Application Under Review",
      description:
        "Your application has been successfully submitted. Our verification team is reviewing your details and documents.",
      color: "amber",
      icon: Clock3,
      label: "Pending Verification",
    },
    approved: {
      title: "Congratulations! You're Approved",
      description:
        "Your delivery partner account has been approved. You can now log in and start your delivery journey.",
      color: "green",
      icon: CheckCircle2,
      label: "Application Approved",
    },
    rejected: {
      title: "Application Needs Attention",
      description:
        "Unfortunately, your application could not be approved. Please review the reason below and submit the corrected details.",
      color: "red",
      icon: XCircle,
      label: "Application Rejected",
    },
  };

  const current = statusConfig[status];
  const StatusIcon = current.icon;

  return (
    <main className="min-h-screen bg-[#f4f8f4] px-4 py-8 sm:px-6 lg:py-12">

      <div className="mx-auto max-w-5xl">

        {/* BRAND HEADER */}
        <div className="mb-8 flex items-center justify-between">
          <Link href="/login" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#16833b] text-white">
              <Leaf size={24} />
            </div>

            <div>
              <h1 className="text-xl font-extrabold text-gray-900">
                BhajiWala
              </h1>
              <p className="text-[10px] font-semibold tracking-widest text-gray-400">
                DELIVERY PARTNER
              </p>
            </div>
          </Link>

          <Link
            href="/login"
            className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-semibold text-gray-600 transition hover:bg-gray-50"
          >
            <LogOut size={16} />
            <span className="hidden sm:block">Back to Login</span>
          </Link>
        </div>

        {/* MAIN CARD */}
        <div className="overflow-hidden rounded-3xl bg-white shadow-xl shadow-green-900/5">

          {/* STATUS HERO */}
          <div
            className={`px-6 py-10 text-center sm:px-10 ${
              status === "pending"
                ? "bg-amber-50"
                : status === "approved"
                ? "bg-green-50"
                : "bg-red-50"
            }`}
          >
            <div
              className={`mx-auto flex h-20 w-20 items-center justify-center rounded-full ${
                status === "pending"
                  ? "bg-amber-100 text-amber-600"
                  : status === "approved"
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-600"
              }`}
            >
              <StatusIcon size={40} />
            </div>

            <div
              className={`mx-auto mt-5 inline-flex rounded-full px-4 py-1.5 text-xs font-bold ${
                status === "pending"
                  ? "bg-amber-100 text-amber-700"
                  : status === "approved"
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {current.label}
            </div>

            <h2 className="mt-5 text-2xl font-extrabold text-gray-900 sm:text-3xl">
              {current.title}
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-gray-600">
              {current.description}
            </p>
          </div>

          <div className="grid gap-8 p-6 sm:p-10 lg:grid-cols-[1.4fr_0.8fr]">

            {/* LEFT CONTENT */}
            <div>

              <h3 className="text-lg font-bold text-gray-900">
                Application Progress
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                Track your registration verification process.
              </p>

              {/* TIMELINE */}
              <div className="mt-8">

                <div className="relative flex gap-4 pb-9">
                  <div className="absolute bottom-0 left-[17px] top-9 w-0.5 bg-green-200" />

                  <div className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-700">
                    <CheckCircle2 size={20} />
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900">
                      Registration Submitted
                    </h4>
                    <p className="mt-1 text-sm text-gray-500">
                      Your registration details have been received.
                    </p>
                    <p className="mt-2 text-xs font-semibold text-green-700">
                      Completed
                    </p>
                  </div>
                </div>

                <div className="relative flex gap-4 pb-9">
                  <div
                    className={`absolute bottom-0 left-[17px] top-9 w-0.5 ${
                      status === "approved"
                        ? "bg-green-200"
                        : "bg-gray-200"
                    }`}
                  />

                  <div
                    className={`relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${
                      status === "rejected"
                        ? "bg-red-100 text-red-600"
                        : status === "approved"
                        ? "bg-green-100 text-green-700"
                        : "bg-amber-100 text-amber-600"
                    }`}
                  >
                    {status === "rejected" ? (
                      <XCircle size={20} />
                    ) : status === "approved" ? (
                      <CheckCircle2 size={20} />
                    ) : (
                      <Clock3 size={20} />
                    )}
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900">
                      Document Verification
                    </h4>
                    <p className="mt-1 text-sm text-gray-500">
                      Our team is checking your submitted documents.
                    </p>
                    <p
                      className={`mt-2 text-xs font-semibold ${
                        status === "pending"
                          ? "text-amber-600"
                          : status === "approved"
                          ? "text-green-700"
                          : "text-red-600"
                      }`}
                    >
                      {status === "pending"
                        ? "In Progress"
                        : status === "approved"
                        ? "Completed"
                        : "Verification Failed"}
                    </p>
                  </div>
                </div>

                <div className="relative flex gap-4">
                  <div
                    className={`relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${
                      status === "approved"
                        ? "bg-green-100 text-green-700"
                        : "bg-gray-100 text-gray-400"
                    }`}
                  >
                    <Bike size={20} />
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900">
                      Account Activation
                    </h4>
                    <p className="mt-1 text-sm text-gray-500">
                      Your delivery partner account will be activated after approval.
                    </p>
                    <p
                      className={`mt-2 text-xs font-semibold ${
                        status === "approved"
                          ? "text-green-700"
                          : "text-gray-400"
                      }`}
                    >
                      {status === "approved"
                        ? "Account Activated"
                        : "Waiting"}
                    </p>
                  </div>
                </div>

              </div>

              {/* REJECTION REASON */}
              {status === "rejected" && (
                <div className="mt-8 rounded-2xl border border-red-200 bg-red-50 p-5">
                  <h4 className="font-bold text-red-800">
                    Reason for Rejection
                  </h4>

                  <p className="mt-2 text-sm leading-6 text-red-700">
                    Your submitted document details need correction.
                    Please review your information and contact support
                    before submitting again.
                  </p>

                  <Link
                    href="/register"
                    className="mt-4 inline-flex items-center gap-2 rounded-xl bg-red-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-red-700"
                  >
                    Update Application
                    <RefreshCw size={16} />
                  </Link>
                </div>
              )}

              {/* APPROVED MESSAGE */}
              {status === "approved" && (
                <div className="mt-8 rounded-2xl border border-green-200 bg-green-50 p-5">
                  <h4 className="font-bold text-green-800">
                    Welcome to the BhajiWala Team!
                  </h4>

                  <p className="mt-2 text-sm leading-6 text-green-700">
                    Your account is ready. Log in with your registered
                    mobile number and password to access your dashboard.
                  </p>

                  <Link
                    href="/login"
                    className="mt-4 inline-flex items-center gap-2 rounded-xl bg-green-700 px-5 py-3 text-sm font-bold text-white transition hover:bg-green-800"
                  >
                    Login to Dashboard
                    <ArrowRight size={17} />
                  </Link>
                </div>
              )}
            </div>

            {/* RIGHT SIDE */}
            <aside className="space-y-5">

              {/* APPLICATION DETAILS */}
              <div className="rounded-2xl border border-gray-100 p-5">
                <h3 className="font-bold text-gray-900">
                  Application Details
                </h3>

                <div className="mt-5 space-y-4">

                  <div>
                    <p className="text-xs text-gray-400">
                      Application ID
                    </p>
                    <p className="mt-1 break-all text-sm font-bold text-gray-800">
                      {applicationId}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-gray-400">
                      Submitted On
                    </p>
                    <p className="mt-1 text-sm font-semibold text-gray-800">
                      20 November 2026
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-gray-400">
                      Account Type
                    </p>
                    <p className="mt-1 text-sm font-semibold text-gray-800">
                      Delivery Partner
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-gray-400">
                      Current Status
                    </p>
                    <p
                      className={`mt-1 text-sm font-bold capitalize ${
                        status === "pending"
                          ? "text-amber-600"
                          : status === "approved"
                          ? "text-green-700"
                          : "text-red-600"
                      }`}
                    >
                      {status}
                    </p>
                  </div>

                </div>
              </div>

              {/* SUPPORT */}
              <div className="rounded-2xl bg-[#f4f8f4] p-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-100 text-green-700">
                  <Headset size={23} />
                </div>

                <h3 className="mt-4 font-bold text-gray-900">
                  Need Help?
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                  Having trouble with your application? Contact our
                  support team for assistance.
                </p>

                <a
                  href="mailto:support@bhajiwala.com"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-green-700 hover:underline"
                >
                  Contact Support
                  <ArrowRight size={16} />
                </a>

                <p className="mt-2 text-[10px] text-gray-400">
                  Demo contact address. Replace with your official support email.
                </p>
              </div>

            </aside>
          </div>
        </div>

        {/* DEMO PREVIEW */}
        <div className="mt-6 rounded-2xl border border-dashed border-gray-300 bg-white p-5">
          <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
            Development Preview
          </p>

          <p className="mt-1 text-sm text-gray-600">
            Switch status to preview all three application states.
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            <button
              onClick={() => setStatus("pending")}
              className={`rounded-xl px-4 py-2.5 text-sm font-semibold ${
                status === "pending"
                  ? "bg-amber-100 text-amber-800"
                  : "bg-gray-100 text-gray-600"
              }`}
            >
              Pending
            </button>

            <button
              onClick={() => setStatus("approved")}
              className={`rounded-xl px-4 py-2.5 text-sm font-semibold ${
                status === "approved"
                  ? "bg-green-100 text-green-800"
                  : "bg-gray-100 text-gray-600"
              }`}
            >
              Approved
            </button>

            <button
              onClick={() => setStatus("rejected")}
              className={`rounded-xl px-4 py-2.5 text-sm font-semibold ${
                status === "rejected"
                  ? "bg-red-100 text-red-800"
                  : "bg-gray-100 text-gray-600"
              }`}
            >
              Rejected
            </button>
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-gray-400">
          © 2026 BhajiWala. All rights reserved.
        </p>

      </div>
    </main>
  );
}
