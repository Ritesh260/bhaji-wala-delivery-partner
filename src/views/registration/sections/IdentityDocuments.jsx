
"use client";

import { Upload } from "lucide-react";

function DocumentUpload({ label, name, files, updateFile }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold text-gray-700">
        {label}
      </label>

      <label className="flex cursor-pointer items-center gap-3 rounded-xl border-2 border-dashed border-gray-200 bg-gray-50 p-4 transition hover:border-green-500 hover:bg-green-50">
        <div className="rounded-lg bg-green-100 p-3 text-green-700">
          <Upload size={20} />
        </div>

        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold text-gray-700">
            {files[name]?.name || "Upload document"}
          </p>
          <p className="mt-1 text-xs text-gray-400">JPG, PNG or PDF</p>
        </div>

        <input
          type="file"
          name={name}
          accept="image/*,.pdf"
          onChange={updateFile}
          className="hidden"
        />
      </label>
    </div>
  );
}

export default function IdentityDocuments({ form, updateField, files, updateFile }) {
  const inputClass =
    "w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 uppercase outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100";

  const labelClass = "mb-2 block text-sm font-semibold text-gray-700";

  return (
    <div>
      <h2 className="mb-2 text-lg font-bold text-gray-900">
        Identity Verification
      </h2>
      <p className="mb-5 text-sm text-gray-500">
        Provide your document details for verification.
      </p>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass}>Aadhaar Number *</label>
          <input
            name="aadhaarNumber"
            value={form.aadhaarNumber}
            onChange={updateField}
            maxLength={12}
            inputMode="numeric"
            placeholder="12-digit Aadhaar number"
            className={inputClass}
          />
        </div>

        <div>
          <label className={labelClass}>PAN Number *</label>
          <input
            name="panNumber"
            value={form.panNumber}
            onChange={updateField}
            maxLength={10}
            placeholder="ABCDE1234F"
            className={inputClass}
          />
        </div>

        <div className="sm:col-span-2">
          <label className={labelClass}>Driving Licence Number *</label>
          <input
            name="drivingLicence"
            value={form.drivingLicence}
            onChange={updateField}
            placeholder="Enter driving licence number"
            className={inputClass}
          />
        </div>

        <DocumentUpload label="Aadhaar Card" name="aadhaarFile" files={files} updateFile={updateFile} />
        <DocumentUpload label="PAN Card" name="panFile" files={files} updateFile={updateFile} />
        <DocumentUpload label="Driving Licence" name="licenceFile" files={files} updateFile={updateFile} />
        <DocumentUpload label="Profile Photo" name="profilePhoto" files={files} updateFile={updateFile} />
      </div>
    </div>
  );
}
