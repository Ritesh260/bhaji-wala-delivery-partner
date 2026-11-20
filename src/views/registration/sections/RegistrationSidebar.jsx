
import { Bike, ShieldCheck } from "lucide-react";

export default function RegistrationSidebar() {
  return (
    <aside className="relative hidden flex-col justify-between overflow-hidden bg-[#126B39] p-9 text-white lg:flex">
      <div>
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-green-800">
            <Bike size={25} />
          </div>
          <div>
            <h2 className="text-xl font-bold">BhajiWala</h2>
            <p className="text-xs text-green-100">Delivery Partner</p>
          </div>
        </div>

        <div className="mt-20">
          <p className="text-sm font-medium text-green-200">
            JOIN OUR DELIVERY TEAM
          </p>

          <h1 className="mt-4 text-4xl font-bold leading-tight">
            Deliver fresh.
            <br />
            Earn more.
            <br />
            Grow with us.
          </h1>

          <p className="mt-5 text-sm leading-7 text-green-100">
            Become a BhajiWala delivery partner and start your journey
            with flexible working hours and transparent earnings.
          </p>
        </div>
      </div>

      <div className="rounded-2xl border border-white/20 bg-white/10 p-5">
        <ShieldCheck size={27} />
        <p className="mt-3 font-semibold">Secure Registration</p>
        <p className="mt-1 text-xs leading-5 text-green-100">
          Your personal information and documents will be handled securely.
        </p>
      </div>

      <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full border-[35px] border-white/5" />
    </aside>
  );
}
