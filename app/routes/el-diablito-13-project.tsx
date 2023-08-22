import { LinksFunction, V2_MetaFunction } from "@remix-run/node";
import elDiablitoLogo from "~/assets/Logos/kinxori-diablito-route-logo.png";
import treceLogo from "~/assets/Logos/kinxori-13-route-logo.png";
import ScrollTopButton from "~/components/ScrollTopButton/ScrollTopButton";
import Footer from "~/components/Pages/FooterPage";
import elDiablito13Asset from "~/assets/el-diablito-13-website-ss.png";
import { useEffect, useState } from "react";

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
  let currentIcon = elDiablitoLogo;
  setInterval(() => {
    currentIcon === elDiablitoLogo ? treceLogo : elDiablitoLogo;
  }, 100);
  console.log("icon?? 🙌 ", currentIcon);
  return [
    {
      rel: "icon",
      href: currentIcon,
      type: "image/png",
      sizes: "100x100",
    },
  ];
};

export const meta: V2_MetaFunction = () => {
  return [
    { title: "El Diablito 13 - Project" },
    {
      name: "description",
      content:
        "Discover the very essence that fuels its existence, delve into its unique features, and immerse yourself in the intricacies of this remarkable project. From concept to creation, join me as I unveil the story behind El Diablito 13 and its creative allure.",
    },
    {
      property: "og:title",
      content: "El Diablito 13 - Project",
    },
    {
      property: "og:description",
      content:
        "Discover the very essence that fuels its existence, delve into its unique features, and immerse yourself in the intricacies of this remarkable project. From concept to creation, join me as I unveil the story behind El Diablito 13 and its creative allure.",
    },
    {
      property: "og:image",
      content:
        "https://el-diablito-13-b8034.firebaseapp.com/assets/New_Logo_Diablo-edited-20b357a7.png",
    },
    {
      property: "og:url",
      content: "https://kinxori.com/el-diablito-13-project",
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
      content: "El Diablito 13 - Project",
    },
    {
      name: "twitter:description",
      content:
        "Discover the very essence that fuels its existence, delve into its unique features, and immerse yourself in the intricacies of this remarkable project. From concept to creation, join me as I unveil the story behind El Diablito 13 and its creative allure.",
    },
    {
      name: "twitter:image",
      content:
        "https://el-diablito-13-b8034.firebaseapp.com/assets/New_Logo_Diablo-edited-20b357a7.png",
    },
  ];
};
