import Banner from "@/components/Banner";
import DetailInfo from "@/components/DetailInfo";
import FeaturedByTag from "@/components/FeaturedByTag";
import FeaturedProduct from "@/components/FeaturedByTag";
import Marquee from "@/components/Marquee";
import MegaMenu from "@/components/MegaMenu";
import NavItem from "@/components/NavItem";

export default function Home() {
  return (
    <>
      {/* <div className="sticky top-0 z-20 bg-white">
        <section className="flex justify-center gap-12 border-gray-100 mt-3">
          <NavItem title="WHAT'S NEW" />

          <NavItem title="POPULAR ITEMS" />
          <NavItem title="SCHOOL & OFFICE" />
          <NavItem title="CLOTHING & ACCESORIES" />

          <MegaMenu />

          <NavItem title="SALE" />
        </section>
        <div className="flex  justify-center bg-ungu p-2">
          <strong className="text-[#858ad6] text-[12px]">
            2,900 japanese favorite*
          </strong>
        </div>
      </div> */}
      <Banner />
      <DetailInfo />
      {/* <FeaturedProduct /> */}
      <FeaturedByTag title="SHOP LUCKY BAGS" tag="kawaii" />
      <Marquee />

      <FeaturedByTag title="POKÉMON COLLECTION" tag="pokemon" />
    </>
  );
}
