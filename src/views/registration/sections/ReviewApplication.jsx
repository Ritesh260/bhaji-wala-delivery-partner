
"use client";

import { CheckCircle2 } from "lucide-react";

function ReviewSection({ title, onEdit, children }) {
  return (
    <div className="rounded-2xl border border-gray-200 p-5">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="font-bold text-gray-900">{title}</h3>
        <button
          type="button"
          onClick={onEdit}
          className="text-sm font-semibold text-green-700 hover:underline"
        >
          Edit
        </button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">{children}</div>
    </div>
  );
}

function ReviewItem({ label, value }) {
  return (
    <div className="min-w-0">
      <p className="text-xs font-semibold uppercase text-gray-400">{label}</p>
      <p className="mt-1 break-words text-sm font-medium text-gray-800">
        {value || "Not provided"}
      </p>
    </div>
  );
}

export default function ReviewApplication({ form, files, onEdit }) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">
          Review Your Application
        </h2>
        <p className="mt-1 text-sm text-gray-500">
          Please verify all your details before submitting.
        </p>
      </div>

      <ReviewSection title="Personal Details" onEdit={() => onEdit(0)}>
        <ReviewItem label="Full Name" value={form.fullName} />
        <ReviewItem label="Mobile Number" value={form.mobile} />
        <ReviewItem label="Email" value={form.email} />
        <ReviewItem label="Date of Birth" value={form.dateOfBirth} />
        <ReviewItem label="Gender" value={form.gender} />
        <ReviewItem label="Address" value={form.address} />
        <ReviewItem label="City" value={form.city} />
        <ReviewItem label="Pincode" value={form.pincode} />
      </ReviewSection>

      <ReviewSection title="Vehicle Details" onEdit={() => onEdit(1)}>
        <ReviewItem label="Vehicle Type" value={form.vehicleType} />
        <ReviewItem label="Vehicle Number" value={form.vehicleNumber} />
        <ReviewItem
          label="Vehicle Photo"
          value={files.vehiclePhoto?.name || "Not uploaded"}
        />
      </ReviewSection>

      <ReviewSection title="Identity Documents" onEdit={() => onEdit(2)}>
        <ReviewItem
          label="Aadhaar Number"
          value={
            form.aadhaarNumber
              ? `XXXX XXXX ${form.aadhaarNumber.slice(-4)}`
              : ""
          }
        />
        <ReviewItem
          label="PAN Number"
          value={
            form.panNumber
              ? `XXXXXX${form.panNumber.slice(-4)}`
              : ""
          }
        />
        <ReviewItem label="Driving Licence Number" value={form.drivingLicence} />
        <ReviewItem
          label="Aadhaar Document"
          value={files.aadhaarFile?.name || "Not uploaded"}
        />
        <ReviewItem
          label="PAN Document"
          value={files.panFile?.name || "Not uploaded"}
        />
        <ReviewItem
          label="Licence Document"
          value={files.licenceFile?.name || "Not uploaded"}
        />
        <ReviewItem
          label="Profile Photo"
          value={files.profilePhoto?.name || "Not uploaded"}
        />
      </ReviewSection>

      <ReviewSection title="Bank Details" onEdit={() => onEdit(3)}>
        <ReviewItem label="Account Holder" value={form.accountHolder} />
        <ReviewItem label="Bank Name" value={form.bankName} />
        <ReviewItem
          label="Account Number"
          value={
            form.accountNumber
              ? `XXXX XXXX ${form.accountNumber.slice(-4)}`
              : ""
          }
        />
        <ReviewItem label="IFSC Code" value={form.ifscCode} />
      </ReviewSection>

      <div className="flex gap-3 rounded-xl border border-green-200 bg-green-50 p-4">
        <CheckCircle2 className="shrink-0 text-green-700" size={22} />
        <div>
          <p className="font-semibold text-green-900">Almost Done!</p>
          <p className="mt-1 text-sm leading-6 text-green-800">
            By submitting, you confirm that the information provided above
            is accurate. Your application will be sent for admin verification.
          </p>
        </div>
      </div>
    </div>
  );
}
