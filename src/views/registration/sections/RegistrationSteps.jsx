
import {
  UserRound,
  Bike,
  FileText,
  Wallet,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

const steps = [
  { title: "Personal", subtitle: "Basic details", icon: UserRound },
  { title: "Vehicle", subtitle: "Vehicle information", icon: Bike },
  { title: "Documents", subtitle: "Identity verification", icon: FileText },
  { title: "Bank", subtitle: "Payment details", icon: Wallet },
  { title: "Review", subtitle: "Confirm application", icon: ShieldCheck },
];

export default function RegistrationSteps({ currentStep, onStepClick }) {
  return (
    <div className="mb-9 grid grid-cols-5 gap-2">
      {steps.map((item, index) => {
        const Icon = item.icon;
        const active = index === currentStep;
        const completed = index < currentStep;

        return (
          <button
            key={item.title}
            type="button"
            disabled={index >= currentStep}
            onClick={() => onStepClick(index)}
            className="min-w-0 text-center disabled:cursor-default"
          >
            <div
              className={`mx-auto flex h-10 w-10 items-center justify-center rounded-full transition ${
                active || completed
                  ? "bg-green-700 text-white"
                  : "bg-gray-100 text-gray-400"
              }`}
            >
              {completed ? <CheckCircle2 size={19} /> : <Icon size={19} />}
            </div>

            <p
              className={`mt-2 truncate text-[11px] font-semibold sm:text-xs ${
                active ? "text-green-700" : completed ? "text-green-600" : "text-gray-400"
              }`}
            >
              {item.title}
            </p>
          </button>
        );
      })}
    </div>
  );
}
