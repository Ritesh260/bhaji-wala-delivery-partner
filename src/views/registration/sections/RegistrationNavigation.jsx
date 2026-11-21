
"use client";

import { ArrowLeft, ArrowRight, CheckCircle2, LoaderCircle } from "lucide-react";

export default function RegistrationNavigation({
  currentStep,
  previousStep,
  nextStep,
  loading = false,
}) {
  return (
    <div className="mt-9 flex items-center justify-between border-t border-gray-100 pt-6">
      <button
        type="button"
        onClick={previousStep}
        disabled={currentStep === 0 || loading}
        className="inline-flex items-center gap-2 rounded-xl border border-gray-200 px-5 py-3 text-sm font-semibold text-gray-600 transition hover:bg-gray-50 disabled:invisible"
      >
        <ArrowLeft size={17} />
        Back
      </button>

      {currentStep < 4 ? (
        <button
          type="button"
          onClick={nextStep}
          disabled={loading}
          className="inline-flex items-center gap-2 rounded-xl bg-green-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-green-800 disabled:opacity-60"
        >
          {currentStep === 3 ? "Review Application" : "Continue"}
          <ArrowRight size={17} />
        </button>
      ) : (
        <button
          type="submit"
          disabled={loading}
          className="inline-flex items-center gap-2 rounded-xl bg-green-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-green-800 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? (
            <>
              <LoaderCircle size={17} className="animate-spin" />
              Submitting...
            </>
          ) : (
            <>
              Submit Application
              <CheckCircle2 size={17} />
            </>
          )}
        </button>
      )}
    </div>
  );
}
