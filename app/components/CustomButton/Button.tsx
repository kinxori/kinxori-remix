import { ReactEventHandler, ReactNode } from "react";

export default function Button({
  children,
  onClick,
  variant = "mainButton",
  type,
  className,
}: {
  children: ReactNode;
  onClick?: ReactEventHandler<HTMLButtonElement>;
  variant?: string | undefined;
  type?: "submit" | "button" | "reset";
  className?: string | undefined;
}) {
  const classes: { [key: string]: string } = {
    mainButton: "mainButton",
    secButton: "secButton",
    ghostButton: "ghostButton",
    linkButton: "linkButton",
  };

  return (
    <span className={className}>
      <button className={classes[variant]} onClick={onClick} type={type}>
        {children}
      </button>
    </span>
  );
}
