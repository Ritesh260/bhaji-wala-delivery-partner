
"use client";

import { ShieldCheck } from "lucide-react";

export default function BankDetails({ form, updateField, agreed, setAgreed }) {
  const inputClass =
    "w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100";

  const labelClass = "mb-2 block text-sm font-semibold text-gray-700";

  const Field = ({ label, name, placeholder }) => (
    <div>
      <label className={labelClass}>
        {label} <span className="text-red-500">*</span>
      </label>
      <input
        name={name}
        value={form[name]}
        onChange={updateField}
        placeholder={placeholder}
        className={inputClass}
      />
    </div>
  );

  return (
    <div>
      <h2 className="mb-2 text-lg font-bold text-gray-900">
        Bank Account Details
      </h2>
      <p className="mb-5 text-sm text-gray-500">
        Your verified bank account will be used for partner payouts.
      </p>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <Field label="Account Holder Name" name="accountHolder" placeholder="Name as per bank account" />
        </div>

        <Field label="Bank Name" name="bankName" placeholder="Enter bank name" />
        <Field label="Account Number" name="accountNumber" placeholder="Enter account number" />
        <div className="sm:col-span-2">
          <Field label="IFSC Code" name="ifscCode" placeholder="e.g. SBIN0001234" />
        </div>
      </div>

      <div className="mt-6 flex gap-3 rounded-xl bg-amber-50 p-4">
        <ShieldCheck className="shrink-0 text-amber-700" size={22} />
        <p className="text-xs leading-5 text-amber-800">
          Ensure your bank details are correct. Actual bank verification
          and payout setup will be implemented securely in the backend.
        </p>
      </div>

      <label className="mt-6 flex items-start gap-3 text-sm text-gray-600">
        <input
          type="checkbox"
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
          className="mt-1 accent-green-700"
        />
        <span>
          I confirm that the information provided by me is correct and I
          agree to the partner terms and conditions.
        </span>
      </label>
    </div>
  );
}
