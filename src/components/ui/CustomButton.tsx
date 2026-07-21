import React from "react";

type ButtonVariant = "primary" | "outline";

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
  const isPrimary = variant === "primary";

  const ANIM = "transition-transform duration-600 ease-in-out";

  const base = [
    // overflow-hidden clips both the rising combined layer and the exiting default text
    "group relative inline-flex items-center justify-center overflow-hidden",
    "cursor-pointer select-none whitespace-nowrap no-underline",

    // Shape & spacing
    "rounded-lg px-5 py-2.5",

    // Typography
    "font-semibold text-sm font-[Inter,system-ui,sans-serif] leading-none",

    // Variant base colours + hover glow
    isPrimary
      ? "bg-stone-900 border-2 border-stone-900 hover:border-amber-500 hover:shadow-[0_6px_24px_rgba(212,160,23,0.40)]"
      : "bg-transparent border-2 border-amber-500 hover:shadow-[0_6px_20px_rgba(212,160,23,0.32)]",

    // Border-color + shadow get their own shorter transition
    "transition-[border-color,box-shadow] duration-1000 ease-out",

    // Active press + focus ring
    "active:scale-[0.97]",
    "focus-visible:outline focus-visible:outline-[2.5px] focus-visible:outline-amber-500 focus-visible:outline-offset-[3px]",

    // Full-width form variant
    fullWidth ? "w-full py-[14px] rounded-xl text-[0.9375rem]" : "",

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
          ${isPrimary ? "text-white" : "text-amber-500"}
        `}
      >
        {icon && <span className={`${rowLayout} text-base`}>{icon}</span>}
        <span>{children}</span>
      </span>

      <span
        className={`
          absolute inset-0 z-20 rounded-[inherit]
          bg-amber-500 text-stone-900
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

  // ── Render as <a> or <button> ────────────────────────────────────────────────
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
