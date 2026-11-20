
"use client";

import { Suspense, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle2,
  PackageCheck,
  Navigation,
  Clock3,
} from "lucide-react";
import OrderSummary from "./sections/OrderSummary";

const initialOrders = {
  "BW-10245": {
    id: "BW-10245",
    customer: "Rahul Sharma",
    phone: "9876543210",
    address: "Flat 302, Marol, Andheri East, Mumbai, Maharashtra",
    amount: 540,
    status: "New",
    time: "Today, 10:30 AM",
    products: [
      { name: "Tomato", qty: 2, price: 40 },
      { name: "Potato", qty: 3, price: 30 },
      { name: "Onion", qty: 2, price: 35 },
    ],
  },
  "BW-10244": {
    id: "BW-10244",
    customer: "Priya Patel",
    phone: "9876543211",
    address: "Building 4, Chakala, Andheri East, Mumbai",
    amount: 320,
    status: "Accepted",
    time: "Today, 10:15 AM",
    products: [
      { name: "Capsicum", qty: 2, price: 50 },
      { name: "Carrot", qty: 2, price: 40 },
    ],
  },
  "BW-10243": {
    id: "BW-10243",
    customer: "Amit Verma",
    phone: "9876543212",
    address: "MIDC Road, Andheri East, Mumbai",
    amount: 680,
    status: "Picked Up",
    time: "Today, 09:45 AM",
    products: [
      { name: "Broccoli", qty: 2, price: 90 },
      { name: "Cauliflower", qty: 3, price: 60 },
    ],
  },
  "BW-10242": {
    id: "BW-10242",
    customer: "Neha Shah",
    phone: "9876543213",
    address: "Sakinaka, Mumbai",
    amount: 250,
    status: "Delivered",
    time: "Today, 09:20 AM",
    products: [
      { name: "Spinach", qty: 2, price: 30 },
      { name: "Cucumber", qty: 2, price: 45 },
    ],
  },
};

const nextAction = {
  New: {
    label: "Accept Order",
    next: "Accepted",
    icon: CheckCircle2,
  },
  Accepted: {
    label: "Mark as Picked Up",
    next: "Picked Up",
    icon: PackageCheck,
  },
  "Picked Up": {
    label: "Complete Delivery",
    next: "Delivered",
    icon: CheckCircle2,
  },
};

function OrderDetailsContent() {
  const params = useParams();
  const router = useRouter();

  const orderId = params.id;
  const order = initialOrders[orderId];

  const [status, setStatus] = useState(order?.status || "New");

  const [history, setHistory] = useState([
    { label: "Order assigned", time: "10:30 AM", done: true },
    {
      label: "Order accepted",
      time: status === "New" ? "Pending" : "10:35 AM",
      done: status !== "New",
    },
    {
      label: "Picked up",
      time:
        status === "Picked Up" || status === "Delivered"
          ? "10:50 AM"
          : "Pending",
      done: status === "Picked Up" || status === "Delivered",
    },
    {
      label: "Delivered",
      time: status === "Delivered" ? "11:10 AM" : "Pending",
      done: status === "Delivered",
    },
  ]);

  if (!order) {
    return (
      <div className="rounded-2xl bg-white p-10 text-center">
        <h2 className="font-bold text-gray-900">
          Order not found
        </h2>

        <Link
          href="/dashboard/orders"
          className="mt-4 inline-block text-sm font-bold text-[#16833b]"
        >
          Back to Orders
        </Link>
      </div>
    );
  }

  const action = nextAction[status];

  const updateStatus = () => {
    if (!action) return;

    const nextStatus = action.next;

    setStatus(nextStatus);

    setHistory((previous) =>
      previous.map((item, index) => {
        if (index === 0) return item;

        const steps = ["New", "Accepted", "Picked Up", "Delivered"];
        const currentIndex = steps.indexOf(nextStatus);

        return {
          ...item,
          done: index <= currentIndex,
          time: index <= currentIndex ? "Just now" : "Pending",
        };
      })
    );
  };

  return (
    <div className="space-y-6">
      <button
        onClick={() => router.back()}
        className="flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-[#16833b]"
      >
        <ArrowLeft size={17} /> Back
      </button>

      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <p className="text-xs font-bold text-[#16833b]">
            ORDER DETAILS
          </p>

          <h1 className="mt-1 text-2xl font-extrabold text-gray-900">
            {order.id}
          </h1>

          <p className="mt-1 text-xs text-gray-500">
            {order.time}
          </p>
        </div>

        <span className="w-fit rounded-full bg-[#eaf7ee] px-4 py-2 text-xs font-bold text-[#16833b]">
          {status}
        </span>
      </div>

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
        <div className="space-y-5 xl:col-span-2">
          <OrderSummary order={order} />

          <section className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
            <h2 className="font-bold text-gray-900">
              Delivery Progress
            </h2>

            <div className="mt-5 space-y-5">
              {history.map((step, index) => (
                <div
                  key={step.label}
                  className="flex items-start gap-3"
                >
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                      step.done
                        ? "bg-[#eaf7ee] text-[#16833b]"
                        : "bg-gray-100 text-gray-400"
                    }`}
                  >
                    {step.done ? (
                      <CheckCircle2 size={17} />
                    ) : (
                      <Clock3 size={16} />
                    )}
                  </div>

                  <div className="flex-1">
                    <p
                      className={`text-sm font-semibold ${
                        step.done ? "text-gray-900" : "text-gray-400"
                      }`}
                    >
                      {step.label}
                    </p>

                    <p className="mt-1 text-xs text-gray-400">
                      {step.time}
                    </p>
                  </div>

                  {index !== history.length - 1 && (
                    <span className="sr-only">Next step</span>
                  )}
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="space-y-5">
          <section className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
            <h2 className="font-bold text-gray-900">
              Delivery Actions
            </h2>

            <p className="mt-2 text-xs leading-5 text-gray-500">
              Update the order as you complete each delivery step.
            </p>

            {action ? (
              <button
                onClick={updateStatus}
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-[#16833b] px-4 py-3.5 text-sm font-bold text-white hover:bg-[#11652e]"
              >
                <action.icon size={18} />
                {action.label}
              </button>
            ) : (
              <div className="mt-5 rounded-xl bg-[#eaf7ee] p-4 text-center text-sm font-bold text-[#16833b]">
                Delivery Completed
              </div>
            )}

            {status === "Accepted" && (
              <p className="mt-3 text-center text-xs text-gray-400">
                Proceed to the store for pickup.
              </p>
            )}

            {status === "Picked Up" && (
              <div className="mt-3 rounded-xl bg-orange-50 p-3 text-xs leading-5 text-orange-700">
                Order picked up. Proceed to the customer's delivery address.
              </div>
            )}
          </section>

          <section className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
            <h2 className="font-bold text-gray-900">
              Quick Navigation
            </h2>

            <p className="mt-2 text-xs text-gray-500">
              Open the address in your maps app.
            </p>

            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(order.address)}`}
              target="_blank"
              rel="noreferrer"
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border border-gray-200 py-3 text-sm font-bold text-[#16833b]"
            >
              <Navigation size={17} />
              Open Maps
            </a>
          </section>
        </div>
      </div>
    </div>
  );
}

export default function OrderDetailsPage() {
  return (
    <Suspense fallback={<div className="p-6 text-sm text-gray-500">Loading order details...</div>}>
      <OrderDetailsContent />
    </Suspense>
  );
}
