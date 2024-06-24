import diablitoBrand from "~/assets/diablito-13-about-collage.jpg";
import diablitoDesignAsset from "~/assets/diablito-13-design-and-experience-asset.png";

export default function BrandIdentifyAndConcept() {
  return (
    <article
      id='brand-identify-and-concept'
      className='flex flex-col gap-5 text-justify pt-[100px]'
    >
      <h3 className='text-[20px] font-bold text-left '>
        <b>Brand Identity and Concept</b>
      </h3>
      <p>
        "El Diablito Trece" is a project centered around the expression of unconventional ideas,
        with the primary objective of providing entertainment through a distinctive perspective on
        the world.
      </p>
      <img
        alt='Collage of 8 art illustrations made by El Diablito Trece - having a real picture of the author in the middle.'
        className='rounded-[10px]'
        src={diablitoBrand}
      />
      <p>
        Meticulously crafting everything, from the branding core to adapting the main theme of "El
        Diablito 13," ensuring a seamless UX/UI design. This involves adhering to specific color
        palettes and font types to maintain a consistent and cohesive aura from start to finish.
      </p>
      <img
        alt="Picture with some of the most important characteristics of El Diablito Trece's webpage. Showing the primary colors and fonts used for this project."
        className='rounded-[10px]'
        src={diablitoDesignAsset}
      />
    </article>
  );
}
