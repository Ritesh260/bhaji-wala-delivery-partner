
"use client";

import { useState } from "react";
import {
  UserRound,
  Phone,
  Mail,
  MapPin,
  Bike,
  FileText,
  ShieldCheck,
  Camera,
  Pencil,
  Save,
  Star,
  CalendarDays,
  CreditCard,
} from "lucide-react";
import PageHeader from "@/components/common/PageHeader";

export default function ProfilePage() {
  const [editing, setEditing] = useState(false);

  const [profile, setProfile] = useState({
    name: "Rider Name",
    phone: "9876543210",
    email: "rider@example.com",
    city: "Mumbai, Maharashtra",
    vehicle: "Two Wheeler",
    vehicleNumber: "MH 02 AB 1234",
    partnerId: "BWP-10025",
  });

  const updateField = (field, value) => {
    setProfile((previous) => ({ ...previous, [field]: value }));
  };

  const saveProfile = () => {
    setEditing(false);
    alert("Demo profile saved locally. Backend integration will be added later.");
  };

  return (
    <div className="space-y-6">
      <PageHeader
        title="My Profile"
        description="Manage your personal and delivery partner details."
        action={
          editing ? (
            <button
              onClick={saveProfile}
              className="flex items-center gap-2 rounded-xl bg-[#16833b] px-4 py-2.5 text-xs font-bold text-white hover:bg-[#11652e]"
            >
              <Save size={15} /> Save Changes
            </button>
          ) : (
            <button
              onClick={() => setEditing(true)}
              className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-xs font-bold text-gray-600 hover:bg-gray-50"
            >
              <Pencil size={15} /> Edit Profile
            </button>
          )
        }
      />

      <section className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
        <div className="h-28 bg-gradient-to-r from-[#16833b] to-[#43ad62]" />

        <div className="px-5 pb-6 sm:px-7">
          <div className="-mt-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="relative flex h-24 w-24 items-center justify-center rounded-2xl border-4 border-white bg-[#eaf7ee] text-3xl font-extrabold text-[#16833b] shadow-sm">
              {profile.name.split(" ").map((word) => word[0]).join("").slice(0, 2)}
              <button className="absolute -bottom-1 -right-1 flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-[#16833b] text-white">
                <Camera size={14} />
              </button>
            </div>

            <div className="sm:pb-1">
              <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-3 py-1.5 text-[10px] font-bold text-green-700">
                <ShieldCheck size={13} /> Verified Partner
              </span>
            </div>
          </div>

          <h2 className="mt-4 text-xl font-extrabold text-gray-900">{profile.name}</h2>
          <p className="mt-1 text-xs text-gray-400">Partner ID: {profile.partnerId}</p>

          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
            <div className="rounded-xl bg-gray-50 p-3">
              <Star size={17} className="text-orange-400" />
              <h3 className="mt-2 text-lg font-extrabold text-gray-900">4.8</h3>
              <p className="text-[10px] text-gray-400">Partner Rating</p>
            </div>
            <div className="rounded-xl bg-gray-50 p-3">
              <Bike size={17} className="text-[#16833b]" />
              <h3 className="mt-2 text-lg font-extrabold text-gray-900">124</h3>
              <p className="text-[10px] text-gray-400">Total Deliveries</p>
            </div>
            <div className="col-span-2 rounded-xl bg-gray-50 p-3 sm:col-span-1">
              <CalendarDays size={17} className="text-blue-500" />
              <h3 className="mt-2 text-lg font-extrabold text-gray-900">2026</h3>
              <p className="text-[10px] text-gray-400">Partner Since</p>
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:p-6">
        <h2 className="mb-5 font-bold text-gray-900">Personal Information</h2>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {[
            { label: "Full Name", field: "name", icon: UserRound },
            { label: "Mobile Number", field: "phone", icon: Phone },
            { label: "Email Address", field: "email", icon: Mail },
            { label: "City", field: "city", icon: MapPin },
            { label: "Vehicle Type", field: "vehicle", icon: Bike },
            { label: "Vehicle Number", field: "vehicleNumber", icon: CreditCard },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.field}>
                <label className="mb-2 block text-xs font-semibold text-gray-500">
                  {item.label}
                </label>
                <div className="flex items-center gap-3 rounded-xl border border-gray-200 px-3 py-3 focus-within:border-[#16833b]">
                  <Icon size={17} className="shrink-0 text-gray-400" />
                  <input
                    disabled={!editing}
                    value={profile[item.field]}
                    onChange={(e) => updateField(item.field, e.target.value)}
                    className="w-full min-w-0 bg-transparent text-sm text-gray-800 outline-none disabled:text-gray-500"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
        <h2 className="mb-4 font-bold text-gray-900">Documents & Verification</h2>

        {[
          ["Identity Verification", "Verified"],
          ["Driving Licence", "Verified"],
          ["Vehicle Registration", "Verified"],
          ["Bank Details", "Pending Review"],
        ].map(([label, status]) => (
          <div key={label} className="flex items-center justify-between gap-3 border-b border-gray-100 py-3 last:border-0">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#eaf7ee] text-[#16833b]">
                <FileText size={17} />
              </div>
              <p className="text-sm font-semibold text-gray-700">{label}</p>
            </div>
            <span className={`rounded-full px-2.5 py-1 text-[10px] font-bold ${
              status === "Verified" ? "bg-green-50 text-green-700" : "bg-orange-50 text-orange-600"
            }`}>
              {status}
            </span>
          </div>
        ))}
      </section>
    </div>
  );
}
