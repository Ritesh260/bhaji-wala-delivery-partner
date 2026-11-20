
"use client";

import { useState } from "react";
import {
  Send,
  CheckCircle2,
  Paperclip,
  MessageSquareText,
} from "lucide-react";

const initialTicket = {
  subject: "",
  category: "",
  orderId: "",
  priority: "Normal",
  description: "",
};

export default function SupportTicket() {
  const [ticket, setTicket] = useState(initialTicket);
  const [attachment, setAttachment] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const inputClass =
    "w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100";

  const labelClass = "mb-2 block text-sm font-semibold text-gray-700";

  const updateField = (e) => {
    const { name, value } = e.target;

    setTicket((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!ticket.subject.trim() || !ticket.category || !ticket.description.trim()) {
      alert("Please complete all required fields.");
      return;
    }

    if (ticket.description.trim().length < 15) {
      alert("Please describe your issue in at least 15 characters.");
      return;
    }

    setSubmitted(true);
  };

  const resetForm = () => {
    setTicket(initialTicket);
    setAttachment(null);
    setSubmitted(false);
  };

  if (submitted) {
    return (
      <section
        id="support-ticket"
        className="scroll-mt-24 rounded-3xl border border-green-200 bg-white p-8 text-center shadow-sm"
      >
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-700">
          <CheckCircle2 size={35} />
        </div>

        <h2 className="mt-5 text-2xl font-bold text-gray-900">
          Ticket Submitted!
        </h2>

        <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-gray-500">
          Your support request has been submitted in this frontend demo.
          Actual ticket creation and tracking will be enabled after backend
          integration.
        </p>

        <div className="mx-auto mt-6 max-w-sm rounded-xl bg-green-50 p-4 text-left">
          <p className="text-xs font-semibold uppercase text-green-700">
            Request Summary
          </p>
          <p className="mt-2 text-sm font-bold text-gray-900">
            {ticket.subject}
          </p>
          <p className="mt-1 text-xs text-gray-500">
            Category: {ticket.category}
          </p>
          <p className="mt-1 text-xs text-gray-500">
            Priority: {ticket.priority}
          </p>
        </div>

        <button
          type="button"
          onClick={resetForm}
          className="mt-6 rounded-xl bg-green-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-green-800"
        >
          Create Another Ticket
        </button>
      </section>
    );
  }

  return (
    <section
      id="support-ticket"
      className="scroll-mt-24 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm"
    >
      <div className="border-b border-gray-100 bg-gray-50 p-6 sm:p-7">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-green-700">
            <MessageSquareText size={24} />
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900">
              Raise a Support Ticket
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              Tell us about the issue you're facing.
            </p>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5 p-6 sm:p-7">
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label className={labelClass}>
              Issue Subject <span className="text-red-500">*</span>
            </label>
            <input
              name="subject"
              value={ticket.subject}
              onChange={updateField}
              placeholder="Briefly describe your issue"
              maxLength={100}
              className={inputClass}
            />
          </div>

          <div>
            <label className={labelClass}>
              Issue Category <span className="text-red-500">*</span>
            </label>
            <select
              name="category"
              value={ticket.category}
              onChange={updateField}
              className={inputClass}
            >
              <option value="">Select category</option>
              <option value="Orders & Deliveries">Orders & Deliveries</option>
              <option value="Earnings & Payments">Earnings & Payments</option>
              <option value="Account & Profile">Account & Profile</option>
              <option value="Vehicle Related">Vehicle Related</option>
              <option value="Documents & Verification">Documents & Verification</option>
              <option value="Technical Issue">Technical Issue</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label className={labelClass}>Priority</label>
            <select
              name="priority"
              value={ticket.priority}
              onChange={updateField}
              className={inputClass}
            >
              <option value="Normal">Normal</option>
              <option value="High">High</option>
              <option value="Urgent">Urgent</option>
            </select>
          </div>

          <div className="sm:col-span-2">
            <label className={labelClass}>Order ID (Optional)</label>
            <input
              name="orderId"
              value={ticket.orderId}
              onChange={updateField}
              placeholder="Enter related order ID"
              className={inputClass}
            />
          </div>

          <div className="sm:col-span-2">
            <label className={labelClass}>
              Describe Your Issue <span className="text-red-500">*</span>
            </label>
            <textarea
              name="description"
              value={ticket.description}
              onChange={updateField}
              rows={5}
              maxLength={1000}
              placeholder="Explain your issue in detail so our team can help you..."
              className={`${inputClass} resize-none`}
            />
            <p className="mt-1 text-right text-xs text-gray-400">
              {ticket.description.length}/1000
            </p>
          </div>

          <div className="sm:col-span-2">
            <label className={labelClass}>
              Attachment (Optional)
            </label>

            <label className="flex cursor-pointer items-center gap-3 rounded-xl border-2 border-dashed border-gray-200 bg-gray-50 p-4 transition hover:border-green-500 hover:bg-green-50">
              <div className="rounded-lg bg-green-100 p-3 text-green-700">
                <Paperclip size={20} />
              </div>

              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold text-gray-700">
                  {attachment?.name || "Attach screenshot or document"}
                </p>
                <p className="mt-1 text-xs text-gray-400">
                  JPG, PNG or PDF · Maximum 5 MB
                </p>
              </div>

              <input
                type="file"
                accept="image/jpeg,image/png,application/pdf"
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files?.[0];

                  if (!file) return;

                  const allowed = [
                    "image/jpeg",
                    "image/png",
                    "application/pdf",
                  ];

                  if (!allowed.includes(file.type)) {
                    alert("Only JPG, PNG and PDF files are allowed.");
                    e.target.value = "";
                    return;
                  }

                  if (file.size > 5 * 1024 * 1024) {
                    alert("Attachment must be smaller than 5 MB.");
                    e.target.value = "";
                    return;
                  }

                  setAttachment(file);
                }}
              />
            </label>
          </div>
        </div>

        <div className="flex flex-col-reverse gap-3 border-t border-gray-100 pt-5 sm:flex-row sm:justify-end">
          <button
            type="button"
            onClick={resetForm}
            className="rounded-xl border border-gray-200 px-6 py-3 text-sm font-semibold text-gray-600 transition hover:bg-gray-50"
          >
            Clear Form
          </button>

          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-700 px-7 py-3 text-sm font-semibold text-white transition hover:bg-green-800"
          >
            Submit Ticket
            <Send size={16} />
          </button>
        </div>
      </form>
    </section>
  );
}
