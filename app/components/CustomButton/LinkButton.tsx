import { Link, PrefetchBehavior } from "@remix-run/react";
import { MouseEventHandler, ReactNode } from "react";

export default function LinkButton({
  children,
  className,
  to,
  onClick,
  target,
  variant = "mainButton",
  prefetch,
}: {
  children: ReactNode;
  className?: string;
  to: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  target?: string;
  variant?: string;
  prefetch?: PrefetchBehavior | undefined;
}) {
  const classes: { [key: string]: string } = {
    mainButton: "mainButton",
    secButton: "secButton",
    ghostButton: "ghostButton",
    linkButton: "linkButton",
  };

  return (
    <Link prefetch={prefetch} to={to} target={target} className={className}>
      <button className={classes[variant]} onClick={onClick}>
        {children}
      </button>
    </Link>
  );
}
