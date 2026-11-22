
"use client";

import { ShieldCheck, Upload } from "lucide-react";

export default function BankDetails({
  form,
  updateField,
  agreed,
  setAgreed,
  files,
  updateFile,
}) {
  const inputClass =
    "w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100";

  const labelClass =
    "mb-2 block text-sm font-semibold text-gray-700";

  return (
    <div>
      <h2 className="mb-2 text-lg font-bold text-gray-900">
        Bank Account Details
      </h2>

      <p className="mb-5 text-sm text-gray-500">
        Your verified bank account will be used for partner payouts.
      </p>

      <div className="grid gap-5 sm:grid-cols-2">

        {/* Account Holder */}
        <div className="sm:col-span-2">
          <label htmlFor="accountHolder" className={labelClass}>
            Account Holder Name <span className="text-red-500">*</span>
          </label>

          <input
            id="accountHolder"
            name="accountHolder"
            type="text"
            value={form.accountHolder || ""}
            onChange={updateField}
            placeholder="Name as per bank account"
            className={inputClass}
            autoComplete="off"
          />
        </div>

        {/* Bank Name */}
        <div>
          <label htmlFor="bankName" className={labelClass}>
            Bank Name <span className="text-red-500">*</span>
          </label>

          <input
            id="bankName"
            name="bankName"
            type="text"
            value={form.bankName || ""}
            onChange={updateField}
            placeholder="Enter bank name"
            className={inputClass}
            autoComplete="off"
          />
        </div>

        {/* Account Number */}
        <div>
          <label htmlFor="accountNumber" className={labelClass}>
            Account Number <span className="text-red-500">*</span>
          </label>

          <input
            id="accountNumber"
            name="accountNumber"
            type="text"
            inputMode="numeric"
            value={form.accountNumber || ""}
            onChange={updateField}
            placeholder="Enter account number"
            className={inputClass}
            autoComplete="off"
          />
        </div>

        {/* IFSC */}
        <div className="sm:col-span-2">
          <label htmlFor="ifscCode" className={labelClass}>
            IFSC Code <span className="text-red-500">*</span>
          </label>

          <input
            id="ifscCode"
            name="ifscCode"
            type="text"
            value={form.ifscCode || ""}
            onChange={updateField}
            placeholder="e.g. SBIN0001234"
            className={inputClass}
            autoComplete="off"
            maxLength={11}
          />
        </div>

        {/* Bank Document */}
        <div className="sm:col-span-2">
          <label className={labelClass}>
            Bank Passbook / Cancelled Cheque
            <span className="text-red-500"> *</span>
          </label>

          <label className="flex cursor-pointer items-center gap-3 rounded-xl border-2 border-dashed border-gray-200 bg-gray-50 p-4 transition hover:border-green-500 hover:bg-green-50">
            <div className="rounded-lg bg-green-100 p-3 text-green-700">
              <Upload size={20} />
            </div>

            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold text-gray-700">
                {files?.bankDocument?.name || "Upload bank proof"}
              </p>

              <p className="mt-1 text-xs text-gray-400">
                JPG, PNG or PDF (Max 5 MB)
              </p>
            </div>

            <input
              type="file"
              name="bankDocument"
              accept="image/jpeg,image/png,application/pdf"
              onChange={updateFile}
              className="hidden"
            />
          </label>
        </div>
      </div>

      {/* Security */}
      <div className="mt-6 flex gap-3 rounded-xl bg-amber-50 p-4">
        <ShieldCheck
          className="shrink-0 text-amber-700"
          size={22}
        />

        <p className="text-xs leading-5 text-amber-800">
          Ensure your bank details are correct. Your bank proof will be
          securely stored and used for verification and payout setup.
        </p>
      </div>

      {/* Agreement */}
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
