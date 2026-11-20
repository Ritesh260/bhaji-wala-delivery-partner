
"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Phone, ShieldCheck, Leaf } from "lucide-react";

export default function ForgotPasswordPage() {
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (phone.length !== 10) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }

    setSubmitted(true);
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f4f8f4] px-4 py-10">
      <div className="w-full max-w-md rounded-3xl bg-white p-6 shadow-xl sm:p-10">
        <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#eaf7ee] text-[#16833b]">
          {submitted ? <ShieldCheck size={29} /> : <Leaf size={29} />}
        </div>

        {submitted ? (
          <>
            <h1 className="text-2xl font-extrabold text-gray-900">Request Submitted</h1>
            <p className="mt-3 text-sm leading-6 text-gray-500">
              If this number is registered, password reset instructions will
              be shared through the verified process.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-7 w-full rounded-xl bg-[#16833b] py-3.5 text-sm font-bold text-white"
            >
              Try Another Number
            </button>
          </>
        ) : (
          <>
            <p className="text-sm font-bold text-[#16833b]">ACCOUNT RECOVERY</p>
            <h1 className="mt-2 text-2xl font-extrabold text-gray-900">Forgot Password?</h1>
            <p className="mt-2 text-sm leading-6 text-gray-500">
              Enter your registered mobile number to start account recovery.
            </p>

            <form onSubmit={handleSubmit} className="mt-7">
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Mobile Number
              </label>
              <div className="flex items-center gap-3 rounded-xl border border-gray-200 px-4 py-3.5 focus-within:border-[#16833b]">
                <Phone size={18} className="text-gray-400" />
                <span className="border-r border-gray-200 pr-3 text-sm text-gray-500">+91</span>
                <input
                  type="tel"
                  value={phone}
                  maxLength={10}
                  onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
                  placeholder="10-digit mobile number"
                  className="w-full text-sm outline-none"
                />
              </div>

              <button className="mt-6 w-full rounded-xl bg-[#16833b] py-3.5 text-sm font-bold text-white hover:bg-[#11652e]">
                Continue
              </button>
            </form>
          </>
        )}

        <Link href="/login" className="mt-7 flex items-center justify-center gap-2 text-sm font-semibold text-gray-500 hover:text-[#16833b]">
          <ArrowLeft size={16} /> Back to Login
        </Link>
      </div>
    </main>
  );
}
