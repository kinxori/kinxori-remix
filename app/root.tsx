import type { LinksFunction, V2_MetaFunction } from "@remix-run/node";
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";
import mainIcon from "~/assets/Logos/new-logo-kinxori.ico";

export const links: LinksFunction = () => {
  return [{ rel: "icon", href: mainIcon }];
};

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Kinxori" },
    { name: "description", content: "Welcome to Remix!" },
    {
      charSet: "utf-8",
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1.0",
    },
  ];
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
