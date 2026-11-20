
"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle2, Bike, ArrowLeft } from "lucide-react";

import RegistrationSteps from "./sections/RegistrationSteps";
import RegistrationSidebar from "./sections/RegistrationSidebar";
import PersonalDetails from "./sections/PersonalDetails";
import VehicleDetails from "./sections/VehicleDetails";
import IdentityDocuments from "./sections/IdentityDocuments";
import BankDetails from "./sections/BankDetails";
import ReviewApplication from "./sections/ReviewApplication";
import RegistrationNavigation from "./sections/RegistrationNavigation";

const initialForm = {
  fullName: "",
  mobile: "",
  email: "",
  password: "",
  confirmPassword: "",
  dateOfBirth: "",
  gender: "",
  address: "",
  city: "",
  pincode: "",
  vehicleType: "",
  vehicleNumber: "",
  drivingLicence: "",
  aadhaarNumber: "",
  panNumber: "",
  accountHolder: "",
  accountNumber: "",
  ifscCode: "",
  bankName: "",
};

export default function RegisterPage() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState(initialForm);
  const [files, setFiles] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const updateField = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]:
        name === "panNumber" || name === "ifscCode"
          ? value.toUpperCase()
          : value,
    }));
  };

  const updateFile = (e) => {
    const file = e.target.files?.[0];
    const name = e.target.name;

    if (!file) return;

    const allowedTypes = [
      "image/jpeg",
      "image/png",
      "application/pdf",
    ];

    if (!allowedTypes.includes(file.type)) {
      alert("Please select a JPG, PNG or PDF file.");
      e.target.value = "";
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      alert("File size must be less than 5 MB.");
      e.target.value = "";
      return;
    }

    setFiles((prev) => ({
      ...prev,
      [name]: file,
    }));
  };

  const nextStep = () => {
    if (step === 0) {
      if (
        !form.fullName.trim() ||
        !form.mobile ||
        !form.email.trim() ||
        !form.password ||
        !form.confirmPassword
      ) {
        alert("Please fill all required personal details.");
        return;
      }

      if (!/^[6-9]\d{9}$/.test(form.mobile)) {
        alert("Please enter a valid 10-digit mobile number.");
        return;
      }

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
        alert("Please enter a valid email address.");
        return;
      }

      if (form.password.length < 8) {
        alert("Password must be at least 8 characters.");
        return;
      }

      if (form.password !== form.confirmPassword) {
        alert("Password and confirm password do not match.");
        return;
      }
    }

    if (step === 1) {
      if (!form.vehicleType || !form.vehicleNumber.trim()) {
        alert("Please fill your vehicle details.");
        return;
      }
    }

    if (step === 2) {
      if (
        !form.aadhaarNumber ||
        !form.panNumber ||
        !form.drivingLicence.trim()
      ) {
        alert("Please fill all required document details.");
        return;
      }

      if (!/^\d{12}$/.test(form.aadhaarNumber)) {
        alert("Please enter a valid 12-digit Aadhaar number.");
        return;
      }

      if (!/^[A-Z]{5}[0-9]{4}[A-Z]$/.test(form.panNumber)) {
        alert("Please enter a valid PAN number.");
        return;
      }
    }

    if (step === 3) {
      if (
        !form.accountHolder.trim() ||
        !form.accountNumber ||
        !form.ifscCode ||
        !form.bankName.trim()
      ) {
        alert("Please complete your bank details.");
        return;
      }

      if (!/^\d{9,18}$/.test(form.accountNumber)) {
        alert("Please enter a valid bank account number (9–18 digits).");
        return;
      }

      if (!/^[A-Z]{4}0[A-Z0-9]{6}$/.test(form.ifscCode)) {
        alert("Please enter a valid IFSC code.");
        return;
      }

      if (!agreed) {
        alert("Please accept the terms and conditions to continue.");
        return;
      }
    }

    setStep((prev) => Math.min(prev + 1, 4));
  };

  const previousStep = () => {
    setStep((prev) => Math.max(prev - 1, 0));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (step !== 4) {
      nextStep();
      return;
    }

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#F5F8F3] px-4 py-10">
        <div className="w-full max-w-lg rounded-3xl bg-white p-8 text-center shadow-xl shadow-green-900/5">
          <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-green-700">
            <CheckCircle2 size={42} />
          </div>

          <h1 className="text-2xl font-bold text-gray-900">
            Application Submitted!
          </h1>

          <p className="mt-3 text-sm leading-6 text-gray-500">
            Your registration has been completed in this demo. Backend
            integration will save your details and send your application
            to the BhajiWala admin team for verification.
          </p>

          <div className="mt-6 rounded-2xl bg-amber-50 p-4 text-left">
            <p className="font-semibold text-amber-800">
              Application Status: Pending
            </p>
            <p className="mt-1 text-xs text-amber-700">
              You will be able to log in after your account is approved.
            </p>
          </div>

          <Link
            href="/application-status"
            className="mt-7 inline-flex w-full items-center justify-center rounded-xl bg-green-700 px-5 py-3 font-semibold text-white transition hover:bg-green-800"
          >
            Check Application Status
          </Link>

          <Link
            href="/login"
            className="mt-4 inline-block text-sm font-semibold text-green-700 hover:underline"
          >
            Back to Login
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#F5F8F3] px-4 py-8 sm:px-6 lg:py-12">
      <div className="mx-auto max-w-5xl">
        <Link
          href="/login"
          className="mb-7 inline-flex items-center gap-2 text-sm font-semibold text-gray-500 transition hover:text-green-700"
        >
          <ArrowLeft size={17} />
          Back to Login
        </Link>

        <div className="grid overflow-hidden rounded-3xl bg-white shadow-xl shadow-green-900/5 lg:grid-cols-[0.85fr_1.5fr]">
          <RegistrationSidebar />

          <section className="p-5 sm:p-8 lg:p-10">
            <div className="mb-8">
              <p className="text-sm font-semibold text-green-700">
                PARTNER REGISTRATION
              </p>

              <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl">
                Create your account
              </h1>

              <p className="mt-2 text-sm text-gray-500">
                Complete all five steps to submit your application.
              </p>
            </div>

            <RegistrationSteps
              currentStep={step}
              onStepClick={setStep}
            />

            <form onSubmit={handleSubmit}>
              {step === 0 && (
                <PersonalDetails
                  form={form}
                  updateField={updateField}
                  showPassword={showPassword}
                  setShowPassword={setShowPassword}
                />
              )}

              {step === 1 && (
                <VehicleDetails
                  form={form}
                  updateField={updateField}
                  files={files}
                  updateFile={updateFile}
                />
              )}

              {step === 2 && (
                <IdentityDocuments
                  form={form}
                  updateField={updateField}
                  files={files}
                  updateFile={updateFile}
                />
              )}

              {step === 3 && (
                <BankDetails
                  form={form}
                  updateField={updateField}
                  agreed={agreed}
                  setAgreed={setAgreed}
                />
              )}

              {step === 4 && (
                <ReviewApplication
                  form={form}
                  files={files}
                  onEdit={setStep}
                />
              )}

              <RegistrationNavigation
                currentStep={step}
                previousStep={previousStep}
                nextStep={nextStep}
              />
            </form>

            <p className="mt-7 text-center text-sm text-gray-500">
              Already have an account?{" "}
              <Link
                href="/login"
                className="font-bold text-green-700 hover:underline"
              >
                Login here
              </Link>
            </p>
          </section>
        </div>

        <p className="mt-6 text-center text-xs text-gray-400">
          © 2026 BhajiWala Delivery Partner
        </p>
      </div>
    </main>
  );
}
