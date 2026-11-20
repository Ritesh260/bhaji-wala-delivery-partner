
"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    category: "account",
    question: "How can I update my profile details?",
    answer:
      "Open the Profile section in your partner dashboard. You can review your personal and vehicle details there. Some verified details may require admin approval to change.",
  },
  {
    category: "account",
    question: "I forgot my password. What should I do?",
    answer:
      "Go to the login page and select Forgot Password. Follow the password recovery instructions to regain access to your account.",
  },
  {
    category: "document",
    question: "How long does document verification take?",
    answer:
      "Your application will be reviewed by the admin team. You can check your application status to see the latest verification progress.",
  },
  {
    category: "document",
    question: "What if my application gets rejected?",
    answer:
      "Check the rejection reason in your application status. Correct the requested information or documents and submit the updated application.",
  },
  {
    category: "order",
    question: "How do I receive a new delivery order?",
    answer:
      "You need to be approved and online to receive eligible delivery requests. When an order is assigned or offered to you, its details will appear in the Orders section.",
  },
  {
    category: "order",
    question: "What should I do if the customer is unavailable?",
    answer:
      "Use the order support option and follow the instructions provided by the support team. Do not mark an order delivered unless it has actually been handed over.",
  },
  {
    category: "payment",
    question: "Where can I check my delivery earnings?",
    answer:
      "Open the Earnings section in your dashboard to review your earnings summary and available payout information.",
  },
  {
    category: "payment",
    question: "What if my payout is delayed?",
    answer:
      "Check your payout history and bank details first. If the payout is still missing, raise a support ticket with the relevant payout details.",
  },
  {
    category: "vehicle",
    question: "How can I change my registered vehicle?",
    answer:
      "Raise a support request with your updated vehicle information. Changes to verified vehicle details may need admin review.",
  },
  {
    category: "safety",
    question: "What should I do if I face a safety issue during delivery?",
    answer:
      "Move to a safe location if possible and contact the appropriate emergency services when necessary. You can also report the incident through partner support.",
  },
];

export default function FAQSection({ search, selectedCategory }) {
  const [openIndex, setOpenIndex] = useState(0);

  const normalizedSearch = search.trim().toLowerCase();

  const filteredFAQs = faqs.filter((faq) => {
    const matchesSearch =
      !normalizedSearch ||
      faq.question.toLowerCase().includes(normalizedSearch) ||
      faq.answer.toLowerCase().includes(normalizedSearch);

    const matchesCategory =
      !selectedCategory || faq.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <section id="support-faq">
      <div className="mb-5">
        <div className="flex items-center gap-2">
          <HelpCircle className="text-green-700" size={22} />
          <h2 className="text-xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
        </div>

        <p className="mt-1 text-sm text-gray-500">
          Find quick answers to common partner questions.
        </p>
      </div>

      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
        {filteredFAQs.length > 0 ? (
          filteredFAQs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="border-b border-gray-100 last:border-b-0"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left transition hover:bg-gray-50"
                >
                  <span className="text-sm font-semibold text-gray-800 sm:text-base">
                    {faq.question}
                  </span>

                  <ChevronDown
                    size={19}
                    className={`shrink-0 text-gray-400 transition-transform ${
                      isOpen ? "rotate-180 text-green-700" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5">
                    <p className="rounded-xl bg-green-50 p-4 text-sm leading-7 text-gray-600">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <div className="p-10 text-center">
            <HelpCircle className="mx-auto text-gray-300" size={35} />
            <h3 className="mt-3 font-semibold text-gray-800">
              No matching questions found
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Try another keyword or raise a support ticket.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
