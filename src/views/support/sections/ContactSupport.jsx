
import {
  MessageSquareText,
  ClipboardList,
  Clock3,
  ArrowRight,
} from "lucide-react";

const contactOptions = [
  {
    title: "Raise a Support Ticket",
    description: "Submit your issue and share the details with our support team.",
    icon: MessageSquareText,
    action: "Create Ticket",
    target: "support-ticket",
    color: "bg-green-100 text-green-700",
  },
  {
    title: "My Support Requests",
    description: "Track the status of your submitted support requests.",
    icon: ClipboardList,
    action: "View Requests",
    target: "support-ticket",
    color: "bg-blue-100 text-blue-700",
  },
  {
    title: "Support Availability",
    description: "Our support availability and response times will be shown here.",
    icon: Clock3,
    action: "View Details",
    target: "support-ticket",
    color: "bg-amber-100 text-amber-700",
  },
];

export default function ContactSupport() {
  const handleClick = (target) => {
    document.getElementById(target)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section>
      <div className="mb-5">
        <h2 className="text-xl font-bold text-gray-900">
          Still Need Help?
        </h2>
        <p className="mt-1 text-sm text-gray-500">
          Choose how you want to get assistance.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {contactOptions.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="rounded-2xl border border-gray-200 bg-white p-5 transition hover:border-green-300 hover:shadow-lg hover:shadow-green-900/5"
            >
              <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${item.color}`}>
                <Icon size={23} />
              </div>

              <h3 className="mt-4 font-bold text-gray-900">
                {item.title}
              </h3>

              <p className="mt-2 min-h-12 text-sm leading-6 text-gray-500">
                {item.description}
              </p>

              <button
                type="button"
                onClick={() => handleClick(item.target)}
                className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-green-700 hover:text-green-800"
              >
                {item.action}
                <ArrowRight size={16} />
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}
