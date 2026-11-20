
"use client";

import { Upload } from "lucide-react";

export default function VehicleDetails({ form, updateField, files, updateFile }) {
  const inputClass =
    "w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100";

  const labelClass = "mb-2 block text-sm font-semibold text-gray-700";

  return (
    <div>
      <h2 className="mb-5 text-lg font-bold text-gray-900">
        Vehicle Information
      </h2>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label className={labelClass}>
            Vehicle Type <span className="text-red-500">*</span>
          </label>
          <select
            name="vehicleType"
            value={form.vehicleType}
            onChange={updateField}
            className={inputClass}
          >
            <option value="">Select vehicle type</option>
            <option value="Bike">Motorcycle</option>
            <option value="Scooter">Scooter</option>
            <option value="Electric Bike">Electric Bike</option>
            <option value="Bicycle">Bicycle</option>
          </select>
        </div>

        <div className="sm:col-span-2">
          <label className={labelClass}>
            Vehicle Registration Number <span className="text-red-500">*</span>
          </label>
          <input
            name="vehicleNumber"
            value={form.vehicleNumber}
            onChange={updateField}
            placeholder="e.g. MH02AB1234"
            className={inputClass}
          />
        </div>

        <div className="sm:col-span-2">
          <label className={labelClass}>Vehicle Photo (Optional)</label>
          <label className="flex cursor-pointer items-center gap-3 rounded-xl border-2 border-dashed border-gray-200 bg-gray-50 p-4 transition hover:border-green-500 hover:bg-green-50">
            <div className="rounded-lg bg-green-100 p-3 text-green-700">
              <Upload size={20} />
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold text-gray-700">
                {files.vehiclePhoto?.name || "Upload vehicle photo"}
              </p>
              <p className="mt-1 text-xs text-gray-400">JPG or PNG</p>
            </div>
            <input
              type="file"
              name="vehiclePhoto"
              accept="image/*"
              onChange={updateFile}
              className="hidden"
            />
          </label>
        </div>
      </div>

      <p className="mt-5 rounded-xl bg-green-50 p-4 text-xs leading-5 text-green-800">
        Please enter your correct vehicle details. These details may be
        checked during partner verification.
      </p>
    </div>
  );
}
