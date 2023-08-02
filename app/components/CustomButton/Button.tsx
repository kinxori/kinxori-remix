import { ReactEventHandler, ReactNode } from "react";

export default function Button({
  children,
  onClick,
  variant = "mainButton",
  type,
}: {
  children: ReactNode;
  onClick?: ReactEventHandler<HTMLButtonElement>;
  variant?: string | undefined;
  type?: "submit" | "button" | "reset";
}) {
  const classes: { [key: string]: string } = {
    mainButton: "mainButton",
    secButton: "secButton",
    ghostButton: "ghostButton",
    linkButton: "linkButton",
  };

  return (
    <button className={classes[variant]} onClick={onClick} type={type}>
      {children}
    </button>
  );
}
