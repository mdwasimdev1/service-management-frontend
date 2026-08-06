import React from "react";

// ১. নতুন ভ্যারিয়েন্ট "danger" যোগ করা হলো
type ButtonVariant = "primary" | "outline" | "danger" | "link";

interface CustomButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  href?: string;
  id?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  className?: string;
  icon?: React.ReactNode;
  fullWidth?: boolean;
}

export default function CustomButton({
  children,
  variant = "primary",
  href,
  id,
  type = "button",
  onClick,
  className = "",
  icon,
  fullWidth = false,
}: CustomButtonProps) {
  const ANIM = "transition-transform duration-600 ease-in-out";

  // ২. বেস স্টাইলগুলো আলাদা অবজেক্টে রাখা হলো
  const variantBaseStyles = {
    primary: "bg-stone-900 border-2 border-solid border-stone-900 hover:border-amber-500 hover:shadow-[0_6px_24px_rgba(212,160,23,0.40)]",
    outline: "bg-transparent border-2 border-solid border-amber-500 hover:shadow-[0_6px_20px_rgba(212,160,23,0.32)]",
    danger: "bg-red-500 border-2 border-solid border-red-500 hover:border-red-600 hover:shadow-[0_6px_24px_rgba(239,68,68,0.40)]",
    link: "bg-transparent border-0 hover:underline",
  };

  // ৩. নরমাল টেক্সট কালার
  const variantTextStyles = {
    primary: "text-white",
    outline: "text-amber-500",
    link: "text-gold-custom",
    danger: "text-white",
  };

  // ৪. হোভার করলে এনিমেশন হয়ে যে ব্যাকগ্রাউন্ড ও টেক্সট আসবে
  const variantHoverBgStyles = {
    primary: "bg-amber-500 text-stone-900",
    outline: "bg-amber-500 text-stone-900",
    danger: "bg-red-700 text-white",
    link: "bg-gold-custom text-white no-underline",
  };

  const base = [
    "group relative inline-flex items-center justify-center overflow-hidden",
    "cursor-pointer select-none whitespace-nowrap no-underline",
    "rounded-md px-5 py-2.5",
    "font-semibold text-sm font-[Inter,system-ui,sans-serif] leading-none",
    "disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none",
    
    // এখান থেকে ডাইনামিক স্টাইল পাবে
    variantBaseStyles[variant],

    "transition-[border-color,box-shadow] duration-1000 ease-out",
    "active:scale-[0.97]",
    "focus-visible:outline focus-visible:outline-[2.5px] focus-visible:outline-amber-500 focus-visible:outline-offset-[3px]",
    fullWidth ? "w-full py-5 rounded-md text-[0.9375rem]" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const rowLayout = "inline-flex items-center gap-1.5";

  const content = (
    <>
      <span
        className={`
          relative z-10 ${rowLayout}
          translate-y-0 group-hover:-translate-y-full
          ${ANIM}
          ${variantTextStyles[variant]}
        `}
      >
        {icon && <span className={`${rowLayout} text-base`}>{icon}</span>}
        <span>{children}</span>
      </span>

      <span
        className={`
          absolute inset-0 z-20 rounded-[inherit]
          ${variantHoverBgStyles[variant]}
          ${rowLayout} justify-center
          translate-y-full group-hover:translate-y-0
          ${ANIM}
        `}
      >
        {icon && <span className={`${rowLayout} text-base`}>{icon}</span>}
        <span>{children}</span>
      </span>
    </>
  );

  if (href) {
    return (
      <a id={id} href={href} className={base} onClick={onClick}>
        {content}
      </a>
    );
  }

  return (
    <button id={id} type={type} className={base} onClick={onClick}>
      {content}
    </button>
  );
}