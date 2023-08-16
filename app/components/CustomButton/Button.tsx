import { FormEvent, ReactEventHandler, ReactNode } from "react";

export default function Button({
  children,
  onClick,
  variant = "mainButton",
  type,
  className,
  disabled,
  ariaLabel,
}: {
  children: ReactNode;
  onClick?: ReactEventHandler<HTMLButtonElement>;
  variant?: string | undefined;
  type?: "submit" | "button" | "reset";
  className?: string | undefined;
  disabled?: boolean;
  ariaLabel?: string;
}) {
  const classes: { [key: string]: string } = {
    mainButton: "mainButton",
    secButton: "secButton",
    ghostButton: "ghostButton",
    linkButton: "linkButton",
  };

  return (
    <span className={className}>
      <button
        aria-label={ariaLabel}
        disabled={disabled}
        className={classes[variant]}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </span>
  );
}
