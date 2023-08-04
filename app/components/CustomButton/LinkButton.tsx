import { Link } from "@remix-run/react";
import { MouseEventHandler, ReactNode, RefAttributes } from "react";

export default function Button({
  children,
  className,
  to,
  onClick,
  target,
  variant = "mainButton",
  type,
}: {
  children: ReactNode;
  className?: string;
  to: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  target?: string;
  variant?: string;
  type?: string | undefined;
}) {
  const classes: { [key: string]: string } = {
    mainButton: "mainButton",
    secButton: "secButton",
    ghostButton: "ghostButton",
    linkButton: "linkButton",
  };

  return (
    <Link to={to} target={target} type={type} className={className}>
      <button className={classes[variant]} onClick={onClick}>
        {children}
      </button>
    </Link>
  );
}
