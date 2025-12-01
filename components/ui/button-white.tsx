import Link from "next/link";

interface ButtonWhiteProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

export default function ButtonWhite({
  children,
  href,
  className = "",
  onClick,
  type = "button",
}: ButtonWhiteProps) {
  const baseClasses =
    "px-8 py-2 border cursor-pointer border-[#1A69BE] text-[#1A69BE] hover:bg-[#1A69BE]/90 font-semibold hover:text-white transition-colors";

  if (href) {
    return (
      <Link href={href} className={`${baseClasses} inline-block ${className}`}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${className}`}
    >
      {children}
    </button>
  );
}
