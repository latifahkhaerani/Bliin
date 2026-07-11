import Banner from "@/components/Banner";
import DetailInfo from "@/components/DetailInfo";
import FeaturedProduct from "@/components/FeaturedProduct";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bliin",
  description:
    "Shop cute kawaii merchandise including plushies, stationery, accessories, collectibles, and more.",
};

export default function Home() {
  return (
    <>
      <Banner />
      <DetailInfo />
      <FeaturedProduct />
    </>
  );
}
