
"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

import {
  CheckCircle2,
  ArrowLeft,
  X,
  AlertCircle,
} from "lucide-react";

import { registerDeliveryPartner } from "@/api/auth_apis";

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

function Toast({ toast, onClose }) {
  if (!toast) return null;

  const isSuccess = toast.type === "success";

  return (
    <div className="fixed right-4 top-5 z-[9999] w-[calc(100%-2rem)] max-w-sm animate-in slide-in-from-top-3">
      <div
        className={`flex items-start gap-3 rounded-xl border p-4 shadow-lg ${
          isSuccess
            ? "border-green-200 bg-white"
            : "border-red-200 bg-white"
        }`}
      >
        <div
          className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${
            isSuccess
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-600"
          }`}
        >
          {isSuccess ? (
            <CheckCircle2 size={20} />
          ) : (
            <AlertCircle size={20} />
          )}
        </div>

        <div className="min-w-0 flex-1">
          <p
            className={`text-sm font-bold ${
              isSuccess ? "text-green-800" : "text-red-700"
            }`}
          >
            {isSuccess ? "Success" : "Error"}
          </p>

          <p className="mt-1 text-sm leading-5 text-gray-600">
            {toast.message}
          </p>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="text-gray-400 transition hover:text-gray-700"
          aria-label="Close notification"
        >
          <X size={18} />
        </button>
      </div>
    </div>
  );
}

export default function RegisterPage() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState(initialForm);
  const [files, setFiles] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [applicationId, setApplicationId] = useState("");
  const [toast, setToast] = useState(null);

  const toastTimer = useRef(null);

  const showToast = (message, type = "error") => {
    setToast({ message, type });

    if (toastTimer.current) {
      clearTimeout(toastTimer.current);
    }

    toastTimer.current = setTimeout(() => {
      setToast(null);
    }, 3500);
  };

  useEffect(() => {
    return () => {
      if (toastTimer.current) {
        clearTimeout(toastTimer.current);
      }
    };
  }, []);

  // Update form fields
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

  // Upload file validation
  const updateFile = (e) => {
    const file = e.target.files?.[0];
    const name = e.target.name;

    if (!file) return;

    const imageOnlyFields = ["vehiclePhoto", "profilePhoto"];

    const allowedTypes = imageOnlyFields.includes(name)
      ? ["image/jpeg", "image/png"]
      : ["image/jpeg", "image/png", "application/pdf"];

    if (!allowedTypes.includes(file.type)) {
      showToast(
        imageOnlyFields.includes(name)
          ? "Please select a JPG or PNG image."
          : "Please select a JPG, PNG or PDF file."
      );

      e.target.value = "";
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      showToast("File size must be less than 5 MB.");
      e.target.value = "";
      return;
    }

    setFiles((prev) => ({
      ...prev,
      [name]: file,
    }));

    showToast("File selected successfully.", "success");
  };

  // Step validation
  const nextStep = () => {
    if (step === 0) {
      if (
        !form.fullName.trim() ||
        !form.mobile.trim() ||
        !form.email.trim() ||
        !form.password ||
        !form.confirmPassword
      ) {
        showToast("Please fill all required personal details.");
        return;
      }

      if (!/^[6-9]\d{9}$/.test(form.mobile.trim())) {
        showToast("Please enter a valid 10-digit mobile number.");
        return;
      }

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
        showToast("Please enter a valid email address.");
        return;
      }

      if (form.password.length < 8) {
        showToast("Password must be at least 8 characters.");
        return;
      }

      if (form.password !== form.confirmPassword) {
        showToast("Password and confirm password do not match.");
        return;
      }
    }

    if (step === 1) {
      if (!form.vehicleType || !form.vehicleNumber.trim()) {
        showToast("Please fill your vehicle details.");
        return;
      }
    }

    if (step === 2) {
      if (
        !form.aadhaarNumber.trim() ||
        !form.panNumber.trim() ||
        !form.drivingLicence.trim()
      ) {
        showToast("Please fill all required document details.");
        return;
      }

      if (!/^\d{12}$/.test(form.aadhaarNumber.trim())) {
        showToast("Please enter a valid 12-digit Aadhaar number.");
        return;
      }

      if (!/^[A-Z]{5}[0-9]{4}[A-Z]$/.test(form.panNumber.trim())) {
        showToast("Please enter a valid PAN number.");
        return;
      }
    }

    if (step === 3) {
      if (
        !form.accountHolder.trim() ||
        !form.accountNumber.trim() ||
        !form.ifscCode.trim() ||
        !form.bankName.trim()
      ) {
        showToast("Please complete your bank details.");
        return;
      }

      if (!/^\d{9,18}$/.test(form.accountNumber.trim())) {
        showToast("Please enter a valid bank account number (9–18 digits).");
        return;
      }

      if (!/^[A-Z]{4}0[A-Z0-9]{6}$/.test(form.ifscCode.trim())) {
        showToast("Please enter a valid IFSC code.");
        return;
      }

      if (!files.bankDocument) {
        showToast("Please upload your bank passbook or cancelled cheque.");
        return;
      }

      if (!agreed) {
        showToast("Please accept the terms and conditions to continue.");
        return;
      }
    }

    setStep((prev) => Math.min(prev + 1, 4));
  };

  // Previous step
  const previousStep = () => {
    setStep((prev) => Math.max(prev - 1, 0));
  };

  // Submit registration
  
const handleSubmit = async (e) => {
  e.preventDefault();

  if (loading) return;

  if (step !== 4) {
    nextStep();
    return;
  }

  // Password validation
  if (!form.password || !form.confirmPassword) {
    showToast("Please enter and confirm your password.", "error");
    return;
  }

  if (form.password !== form.confirmPassword) {
    showToast("Password and confirm password do not match.", "error");
    return;
  }

  setLoading(true);

  try {
    const data = new FormData();

    // Personal details
    data.append("fullName", form.fullName.trim());
    data.append("mobile", form.mobile.trim());
    data.append("email", form.email.trim().toLowerCase());
    data.append("password", form.password);
    data.append("confirmPassword", form.confirmPassword);

    data.append("dateOfBirth", form.dateOfBirth || "");
    data.append("gender", form.gender || "");
    data.append("address", form.address.trim());
    data.append("city", form.city.trim());
    data.append("pincode", form.pincode.trim());

    // Vehicle details
    data.append("vehicleType", form.vehicleType);
    data.append("vehicleNumber", form.vehicleNumber.trim());

    // Identity details
    data.append("aadhaarNumber", form.aadhaarNumber.trim());
    data.append("panNumber", form.panNumber.trim().toUpperCase());
    data.append("drivingLicence", form.drivingLicence.trim());

    // Bank details
    data.append("accountHolder", form.accountHolder.trim());
    data.append("accountNumber", form.accountNumber.trim());
    data.append("ifscCode", form.ifscCode.trim().toUpperCase());
    data.append("bankName", form.bankName.trim());

    // Vehicle photo
    if (files.vehiclePhoto) {
      data.append("vehiclePhoto", files.vehiclePhoto);
    }

    // Identity documents
    if (files.aadhaarFile) {
      data.append("aadhaarDocument", files.aadhaarFile);
    }

    if (files.panFile) {
      data.append("panDocument", files.panFile);
    }

    if (files.licenceFile) {
      data.append("drivingLicenceDocument", files.licenceFile);
    }

    if (files.profilePhoto) {
      data.append("profilePhoto", files.profilePhoto);
    }

    // Bank proof
    if (files.bankDocument) {
      data.append("bankDocument", files.bankDocument);
    }

    // Send registration request
    const response = await registerDeliveryPartner(data);

    const result = response.data?.data || response.data;

    const newApplicationId =
      result?.applicationId ||
      result?.partner?.applicationId ||
      "";

    setApplicationId(newApplicationId);
    setSubmitted(true);

    showToast("Registration submitted successfully!", "success");
  } catch (error) {
    console.error("Registration error:", error);

    const message =
      error.response?.data?.message ||
      "Registration failed. Please try again.";

    showToast(message, "error");
  } finally {
    setLoading(false);
  }
};


  // Registration success screen
  if (submitted) {
    return (
      <>
        <Toast toast={toast} onClose={() => setToast(null)} />

        <main className="flex min-h-screen items-center justify-center bg-[#F5F8F3] px-4 py-10">
          <div className="w-full max-w-lg rounded-3xl bg-white p-8 text-center shadow-xl shadow-green-900/5">
            <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-green-700">
              <CheckCircle2 size={42} />
            </div>

            <h1 className="text-2xl font-bold text-gray-900">
              Application Submitted!
            </h1>

            <p className="mt-3 text-sm leading-6 text-gray-500">
              Your registration details have been submitted successfully.
              Our BhajiWala admin team will review your application.
            </p>

            {applicationId && (
              <div className="mt-5 rounded-xl bg-green-50 p-4">
                <p className="text-xs font-medium text-green-700">
                  Your Application ID
                </p>

                <p className="mt-1 break-all text-sm font-bold text-green-900">
                  {applicationId}
                </p>
              </div>
            )}

            <div className="mt-6 rounded-2xl bg-amber-50 p-4 text-left">
              <p className="font-semibold text-amber-800">
                Application Status: Pending
              </p>

              <p className="mt-1 text-xs leading-5 text-amber-700">
                You can log in to check your application status. Dashboard
                access will be available after approval.
              </p>
            </div>

            <Link
              href="/login"
              className="mt-7 inline-flex w-full items-center justify-center rounded-xl bg-green-700 px-5 py-3 font-semibold text-white transition hover:bg-green-800"
            >
              Continue to Login
            </Link>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <Toast toast={toast} onClose={() => setToast(null)} />

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
                onStepClick={(targetStep) => {
                  if (targetStep <= step) {
                    setStep(targetStep);
                  } else if (targetStep === step + 1) {
                    nextStep();
                  }
                }}
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
                    files={files}
                    updateFile={updateFile}
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
                  loading={loading}
                />
              </form>
            </section>
          </div>

          <p className="mt-6 text-center text-xs text-gray-400">
            © 2026 BhajiWala Delivery Partner
          </p>
        </div>
      </main>
    </>
  );
}
