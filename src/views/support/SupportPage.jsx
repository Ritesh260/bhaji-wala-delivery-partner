
"use client";

import { useState } from "react";
import { X, Headset } from "lucide-react";

import SupportHeader from "./sections/SupportHeader";
import HelpCategories from "./sections/HelpCategories";
import FAQSection from "./sections/FAQSection";
import ContactSupport from "./sections/ContactSupport";
import SupportTicket from "./sections/SupportTicket";

export default function SupportPage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);

    setTimeout(() => {
      document.getElementById("support-faq")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  };

  const clearFilters = () => {
    setSearch("");
    setSelectedCategory("");
  };

  return (
    <main className="min-h-screen bg-[#F5F8F3] px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-9">

        {/* PAGE HEADER */}
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <div className="flex items-center gap-2 text-sm font-semibold text-green-700">
              <Headset size={18} />
              Partner Assistance
            </div>

            <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl">
              Help & Support
            </h1>

            <p className="mt-2 text-sm text-gray-500">
              We're here to help you with your delivery partner journey.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm font-semibold text-green-800 sm:self-auto">
            <span className="h-2 w-2 rounded-full bg-green-600" />
            Partner Help Center
          </div>
        </div>

        {/* SUPPORT HERO */}
        <SupportHeader
          search={search}
          setSearch={setSearch}
        />

        {/* HELP CATEGORIES */}
        <HelpCategories onSelect={handleCategorySelect} />

        {/* FAQ */}
        <section>
          {(search || selectedCategory) && (
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
              <p className="text-sm text-gray-600">
                Showing filtered help questions
              </p>

              <button
                type="button"
                onClick={clearFilters}
                className="inline-flex items-center gap-1 text-sm font-semibold text-green-700 hover:underline"
              >
                <X size={15} />
                Clear filters
              </button>
            </div>
          )}

          <FAQSection
            search={search}
            selectedCategory={selectedCategory}
          />
        </section>

        {/* CONTACT OPTIONS */}
        <ContactSupport />

        {/* SUPPORT TICKET */}
        <SupportTicket />

        {/* FOOTER */}
        <div className="border-t border-gray-200 py-6 text-center">
          <p className="text-sm font-semibold text-gray-700">
            Need more assistance?
          </p>
          <p className="mt-1 text-xs text-gray-500">
            Raise a support ticket and share your issue with the BhajiWala team.
          </p>
          <p className="mt-4 text-xs text-gray-400">
            © 2026 BhajiWala Delivery Partner. All rights reserved.
          </p>
        </div>

      </div>
    </main>
  );
}
