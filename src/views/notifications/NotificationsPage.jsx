
"use client";

import { useState } from "react";
import {
  Bell,
  Package,
  Wallet,
  Gift,
  CheckCheck,
  Trash2,
  Clock3,
} from "lucide-react";
import PageHeader from "@/components/common/PageHeader";

const initialNotifications = [
  {
    id: 1,
    title: "New delivery assigned!",
    message: "Order BW-10245 has been assigned to you. Accept the order to get started.",
    time: "5 minutes ago",
    type: "order",
    unread: true,
  },
  {
    id: 2,
    title: "Payment credited",
    message: "Your delivery earning of ₹250 has been added to your account.",
    time: "1 hour ago",
    type: "wallet",
    unread: true,
  },
  {
    id: 3,
    title: "Weekly target reminder",
    message: "Complete 7 more deliveries to reach your weekly target.",
    time: "3 hours ago",
    type: "reward",
    unread: false,
  },
  {
    id: 4,
    title: "Order successfully delivered",
    message: "You have successfully completed order BW-10242.",
    time: "Yesterday",
    type: "order",
    unread: false,
  },
];

const iconMap = {
  order: Package,
  wallet: Wallet,
  reward: Gift,
};

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState(initialNotifications);

  const unreadCount = notifications.filter((item) => item.unread).length;

  const markAllRead = () => {
    setNotifications((previous) =>
      previous.map((item) => ({ ...item, unread: false }))
    );
  };

  const removeNotification = (id) => {
    setNotifications((previous) => previous.filter((item) => item.id !== id));
  };

  return (
    <div className="space-y-6">
      <PageHeader
        title="Notifications"
        description={`${unreadCount} unread notifications`}
        action={
          <button
            onClick={markAllRead}
            className="flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-xs font-bold text-[#16833b] hover:bg-green-50"
          >
            <CheckCheck size={16} /> Mark all as read
          </button>
        }
      />

      <section className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
        {notifications.length ? (
          <div className="divide-y divide-gray-100">
            {notifications.map((item) => {
              const Icon = iconMap[item.type] || Bell;

              return (
                <div
                  key={item.id}
                  className={`flex gap-3 p-4 transition sm:gap-4 sm:p-5 ${
                    item.unread ? "bg-[#f4fbf6]" : "bg-white"
                  }`}
                >
                  <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#eaf7ee] text-[#16833b]">
                    <Icon size={20} />
                    {item.unread && (
                      <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full border-2 border-white bg-orange-500" />
                    )}
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="text-sm font-bold text-gray-900">{item.title}</h3>
                      <span className="flex items-center gap-1 text-[10px] text-gray-400">
                        <Clock3 size={11} /> {item.time}
                      </span>
                    </div>

                    <p className="mt-1 text-xs leading-5 text-gray-500">
                      {item.message}
                    </p>

                    {item.unread && (
                      <button
                        onClick={() =>
                          setNotifications((previous) =>
                            previous.map((notification) =>
                              notification.id === item.id
                                ? { ...notification, unread: false }
                                : notification
                            )
                          )
                        }
                        className="mt-2 text-xs font-bold text-[#16833b] hover:underline"
                      >
                        Mark as read
                      </button>
                    )}
                  </div>

                  <button
                    onClick={() => removeNotification(item.id)}
                    title="Delete notification"
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-gray-400 hover:bg-red-50 hover:text-red-500"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="px-5 py-16 text-center">
            <Bell size={38} className="mx-auto text-gray-300" />
            <h3 className="mt-3 font-bold text-gray-800">You're all caught up!</h3>
            <p className="mt-1 text-sm text-gray-400">No notifications available.</p>
          </div>
        )}
      </section>
    </div>
  );
}
