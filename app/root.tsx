import { LinksFunction, V2_MetaFunction } from "@remix-run/node";
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";
import stylesheet from "~/tailwind.css";
import NavBar from "~/components/NavBar/NavBar";

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body id="root" className="bg-bgColor">
        <NavBar />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <script
          defer
          src="https://kit.fontawesome.com/71cfa127b4.js"
          crossOrigin="anonymous"
        ></script>
      </body>
    </html>
  );
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

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Kinxori" },
    {
      name: "description",
      content:
        "My personal website showcases my career as a web developer. It provides visitors with an in-depth look at my projects, skills, and hobbies. If you share similar interests and like what you see, we can connect to be friends, share knowledge, or collaborate on a project.",
    },
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
    {
      property: "og:title",
      content: "Kinxori - My personal website 💻",
    },
    {
      property: "og:description",
      content:
        "Kinxori is my personal website where you can have a deep dive in who I am, what I do and what I enjoy.",
    },
    {
      property: "og:image",
      content: "https://pbs.twimg.com/profile_images/1659370175546765314/NQtKyiWa_400x400.jpg",
    },
    {
      property: "og:url",
      content: "https://kinxori.com",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:site_name",
      content: "Kinxori",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:site",
      content: "@kinxori",
    },
    {
      name: "twitter:title",
      content: "Kinxori - My Personal Website 💻",
    },
    {
      name: "twitter:description",
      content:
        "Kinxori is my personal website where you can have a deep dive in who I am, what I do and what I enjoy.",
    },
    {
      name: "twitter:image",
      content: "https://pbs.twimg.com/profile_images/1659370175546765314/NQtKyiWa_400x400.jpg",
    },
  ];
};
