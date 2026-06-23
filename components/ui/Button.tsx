import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  variant?: "gold" | "pink" | "lavender" | "peach";
};

const baseClassName =
  "inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold text-[var(--brown)] shadow-[0_12px_26px_rgba(107,79,59,0.14)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_30px_rgba(107,79,59,0.2)]";

const variantClassName = {
  gold: "bg-[var(--gold)]",
  pink: "bg-[var(--pink)]",
  lavender: "bg-[var(--lavender)]",
  peach: "bg-[var(--peach)]",
};

export default function Button({
  children,
  href,
  className = "",
  type = "button",
  onClick,
  variant = "gold",
}: ButtonProps) {
  const buttonClassName = `${baseClassName} ${variantClassName[variant]} ${className}`.trim();

  if (href) {
    return (
      <Link href={href} className={buttonClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={buttonClassName}>
      {children}
    </button>
  );
}
