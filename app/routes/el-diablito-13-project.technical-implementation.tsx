import VideoLoader from "~/components/VideoLoader/VideoLoader";
import reactLogo from "~/assets/Logos/react-color-logo.png";
import javascriptLogo from "~/assets/Logos/javascript-color-logo.png";
import htmlLogo from "~/assets/Logos/html-color-logo.png";
import cssLogo from "~/assets/Logos/css-color-logo.png";
import githubLogo from "~/assets/Logos/github-white-logo.png";

export default function DiablitoTechnicalImplementation() {
  return (
    <article className="flex flex-col gap-5 text-justify">
      <h3 className="text-[20px] font-bold text-left ">
        <b>Technical Implementation</b>
      </h3>
      <p>In the creation of this project, five main technologies took center stage: :</p>
      <ul className="list-disc pl-5">
        <li className="relative">
          &#xa0;&#xa0;&#xa0;&#xa0;&#xa0;ReactJs
          <img
            className="absolute left-0 top-[50%] translate-y-[-50%] h-4 w-4"
            src={reactLogo}
            alt="react js logo"
          />
        </li>
        <li className="relative">
          &#xa0;&#xa0;&#xa0;&#xa0;&#xa0;JavaScript
          <img
            className="absolute left-0 top-[50%] translate-y-[-50%] h-4 w-4"
            src={javascriptLogo}
            alt="javascript logo"
          />
        </li>
        <li className="relative">
          &#xa0;&#xa0;&#xa0;&#xa0;&#xa0;HTML5
          <img
            className="absolute left-0 top-[50%] translate-y-[-50%] h-4 w-4"
            src={htmlLogo}
            alt="html5 logo"
          />
        </li>
        <li className="relative">
          &#xa0;&#xa0;&#xa0;&#xa0;&#xa0;CSS3
          <img
            className="absolute left-0 top-[50%] translate-y-[-50%] h-4 w-4"
            src={cssLogo}
            alt="CSS3 logo"
          />
        </li>
        <li className="relative">
          &#xa0;&#xa0;&#xa0;&#xa0;&#xa0;Github
          <img
            className="absolute left-0 top-[50%] translate-y-[-50%] h-4 w-4"
            src={githubLogo}
            alt="github logo"
          />
        </li>
      </ul>
      <p>
        While "El Diablito 13" does not currently demand added complexities such as databases or
        login authentication, it is important to note that this stance doesn't preclude the
        potential incorporation of such features in the near future.
      </p>
      <p>
        Acknowledging the diversity of devices used to access the website, we have embraced a
        responsive design approach. Our commitment to the "Mobile First" methodology has expedited
        development and minimized CSS code redundancy.
      </p>
      <VideoLoader
        className="rounded-[10px]"
        autoPlay
        muted
        loop
        src="https://firebasestorage.googleapis.com/v0/b/myportfolio-70cb1.appspot.com/o/el-diablito-13-responsive-design-asset.mp4?alt=media&token=486ea978-ae50-49d4-ae01-3996989a0f94"
      />
      <p>
        Furthermore, maintaining a steadfast dedication to best practices for SEO optimization,
        ensuring optimal visibility across search engines. In the realm of Front-end development, we
        continue to uphold exemplary practices, producing clean and maintainable code that
        contributes to an optimal user experience.
      </p>
      <VideoLoader
        className="rounded-[10px]"
        autoPlay
        muted
        loop
        src="https://firebasestorage.googleapis.com/v0/b/myportfolio-70cb1.appspot.com/o/el-diablito-13-google-search-asset.mp4?alt=media&token=85854b18-af37-46b3-8fd0-ce0fbe919a82"
      />
    </article>
  );
}
