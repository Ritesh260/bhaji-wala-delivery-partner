
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

  const labelClass = "mb-2 block text-sm font-semibold text-gray-700";

  // Reusable input field
  function Field({ label, name, placeholder, type = "text" }) {
    return (
      <div>
        <label htmlFor={name} className={labelClass}>
          {label} <span className="text-red-500">*</span>
        </label>

        <input
          id={name}
          type={type}
          name={name}
          value={form?.[name] ?? ""}
          onChange={(e) => updateField(e)}
          placeholder={placeholder}
          className={inputClass}
          autoComplete="off"
        />
      </div>
    );
  }

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
          <Field
            label="Account Holder Name"
            name="accountHolder"
            placeholder="Name as per bank account"
          />
        </div>

        <Field
          label="Bank Name"
          name="bankName"
          placeholder="Enter bank name"
        />

        <Field
          label="Account Number"
          name="accountNumber"
          placeholder="Enter account number"
        />

        <div className="sm:col-span-2">
          <Field
            label="IFSC Code"
            name="ifscCode"
            placeholder="e.g. SBIN0001234"
          />
        </div>

        {/* Bank Document Upload */}
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

      {/* Security Information */}
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
