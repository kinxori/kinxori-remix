import { LinksFunction, V2_MetaFunction } from "@remix-run/node";
import kinxoriHomeIcon from "~/assets/Logos/kinxori-home-route-logo.png";
import ScrollTopButton from "~/components/ScrollTopButton/ScrollTopButton";
import Footer from "~/components/Pages/FooterPage";
import elDiablito13Asset from "~/assets/el-diablito-13-website-ss.png";

export default function ElDiablito13() {
  return (
    <article className="font-[inter] bg-mainColor pt-[60px] overflow-y-scroll w-[100vw] flex flex-col text-white">
      <ScrollTopButton />
      <div className=" bg-bgColor flex-col flex p-10 box-border">
        <div className="flex flex-col">
          <h3 className="text-[30px] font-bold  ">
            <b>El Diablito 13</b> 👺
          </h3>
          <p className="text-justify mt-5">
            Discover the very essence that fuels its existence, delve into its unique features, and
            immerse yourself in the intricacies of this remarkable project. From concept to
            creation, join me as I unveil the story behind El Diablito 13 and its creative allure.
          </p>
          <img className="rounded-[10px] mt-5" src={elDiablito13Asset} />
        </div>
        <hr className="border-white/50 my-10"></hr>
      </div>
      <Footer />
    </article>
  );
}

export const links: LinksFunction = () => {
  return [
    {
      rel: "icon",
      href: kinxoriHomeIcon,
      type: "image/png",
      sizes: "98x98",
    },
  ];
};

export const meta: V2_MetaFunction = () => {
  return [
    { title: "El Diablito 13 - Project" },
    {
      name: "description",
      content:
        "My personal website showcases my career as a web developer. It provides visitors with an in-depth look at my projects, skills, and hobbies. If you share similar interests and like what you see, we can connect to be friends, share knowledge, or collaborate on a project.",
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
