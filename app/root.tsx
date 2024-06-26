import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";
import { LinksFunction, MetaFunction } from "@remix-run/node";
import stylesheet from "~/tailwind.css?url";
import { LiveReload } from "@remix-run/react";
import NavBar from "~/components/NavBar/NavBar";
import Footer from "~/components/Pages/FooterPage";
import Error404Page from "~/components/Pages/Error404Page";

// export function ErrorBoundary({ error }: ErrorEvent) {
//   console.error("404 not found 🥲", error);
//   return (
//     <html>
//       <head>
//         <title>404 Not Found!</title>
//         <Meta />
//         <Links />
//       </head>
//       <body>
//         <Error404Page />
//         <Footer />
//         <NavBar />
//         <Scripts />
//         <script
//           defer
//           src='https://kit.fontawesome.com/71cfa127b4.js'
//           crossOrigin='anonymous'
//         ></script>
//       </body>
//     </html>
//   );
// }

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        <script
          defer
          src='https://kit.fontawesome.com/71cfa127b4.js'
          crossOrigin='anonymous'
        ></script>
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export const links: LinksFunction = () => {
  return [
    {
      rel: "canonical",
      href: "https://kinxori.com",
    },
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "preconnect",
      href: " https://fonts.gstatic.com",
      crossOrigin: "anonymous",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
    },
    { rel: "stylesheet", href: stylesheet },
  ];
};

export const meta: MetaFunction = () => {
  return [
    {
      charSet: "utf-8",
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1.0",
    },
    {
      name: "keywords",
      content:
        "Personal Website, Portfolio, Web developer, React developer, Front-end developer, Javascript developer, CSS developer, HTML5 developer, Remix developer, Frontend freelancer, Kinxori, Gustavo Quiroz",
    },
    {
      name: "author",
      content: "Gustavo Quiroz, Kinxori, @kinxori",
    },
    {
      name: "robots",
      content: "index, follow",
    },
  ];
};
