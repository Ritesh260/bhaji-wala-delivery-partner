
"use client";

import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";

export default function RegistrationNavigation({
  currentStep,
  previousStep,
  nextStep,
}) {
  return (
    <div className="mt-9 flex items-center justify-between border-t border-gray-100 pt-6">
      <button
        type="button"
        onClick={previousStep}
        disabled={currentStep === 0}
        className="inline-flex items-center gap-2 rounded-xl border border-gray-200 px-5 py-3 text-sm font-semibold text-gray-600 transition hover:bg-gray-50 disabled:invisible"
      >
        <ArrowLeft size={17} />
        Back
      </button>

      {currentStep < 4 ? (
        <button
          type="button"
          onClick={nextStep}
          className="inline-flex items-center gap-2 rounded-xl bg-green-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-green-800"
        >
          {currentStep === 3 ? "Review Application" : "Continue"}
          <ArrowRight size={17} />
        </button>
      ) : (
        <button
          type="submit"
          className="inline-flex items-center gap-2 rounded-xl bg-green-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-green-800"
        >
          Submit Application
          <CheckCircle2 size={17} />
        </button>
      )}
    </div>
  );
}
