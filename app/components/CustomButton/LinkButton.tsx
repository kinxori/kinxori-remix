import { Link, PrefetchBehavior } from "@remix-run/react"; //   not exported !!
import { MouseEventHandler, ReactNode } from "react";

export default function LinkButton({
  children,
  className,
  to,
  onClick,
  target,
  variant = "mainButton",
  prefetch,
  ariaLabel,
  disabled,
  download,
}: {
  children: ReactNode;
  className?: string;
  to: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  target?: string;
  variant?: string;
  prefetch?: PrefetchBehavior | undefined;
  ariaLabel?: string;
  disabled?: boolean;
  download?: boolean;
}) {
  const classes: { [key: string]: string } = {
    mainButton: "mainButton",
    secButton: "secButton",
    ghostButton: "ghostButton",
    linkButton: "linkButton",
  };

  return (
    <Link download={download} prefetch={prefetch} to={to} target={target} className={className}>
      <button
        disabled={disabled}
        aria-label={ariaLabel}
        className={classes[variant]}
        onClick={onClick}
      >
        {children}
      </button>
    </Link>
  );
}
