import { MouseEventHandler, ReactNode } from "react";

export default function AnchorButton({
  children,
  className,
  onClick,
  target,
  variant = "mainButton",
  type,
  href,
  download,
}: {
  children: ReactNode;
  className?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  target?: string;
  variant?: string;
  type?: string | undefined;
  href?: string;
  download?: boolean | string;
}) {
  const classes: { [key: string]: string } = {
    mainButton: "mainButton",
    secButton: "secButton",
    ghostButton: "ghostButton",
    linkButton: "linkButton",
  };

  return (
    <a
      href={href}
      download={download}
      onClick={onClick}
      target={target}
      type={type}
      className={className}
    >
      <button className={classes[variant]}>{children}</button>
    </a>
  );
}
