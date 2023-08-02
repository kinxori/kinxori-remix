import { MouseEventHandler, ReactNode } from "react";

export default function ButtonAnchor({
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
    <span className={className}>
      <a href={href} download={download} onClick={onClick} target={target} type={type}>
        <button className={classes[variant]}>{children}</button>
      </a>
    </span>
  );
}
