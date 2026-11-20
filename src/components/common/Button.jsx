
export default function Button({
  children,
  onClick,
  variant = "primary",
  className = "",
  type = "button",
  disabled = false,
}) {
  const variants = {
    primary: "bg-[#16833b] text-white hover:bg-[#11652e]",
    secondary: "bg-[#eaf7ee] text-[#16833b] hover:bg-[#dff1e5]",
    outline: "border border-gray-200 bg-white text-gray-700 hover:bg-gray-50",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition disabled:opacity-50 ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
