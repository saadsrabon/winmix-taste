import BrandSection from "@/components/BrandSection";
import CulinaryHabitSection from "@/components/CulinaryHabitSection";
import TrustSection from "@/components/TrustSection";
import FeaturedProducts from "@/components/FeaturedProducts";
import CategoryBrowse from "@/components/CategoryBrowse";
import ProductsSection from "@/components/ProductsSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import Newsletter from "@/components/Newsletter";
import PartnerSection from "@/components/PartnerSection";

const Index = () => {
  return (
    <>
      <main>
        {/* <HeroCarousel /> */}
        <BrandSection />
        <CulinaryHabitSection />
        <TrustSection />
        <CategoryBrowse />
        <FeaturedProducts />
        {/* <ProductsSection /> */}
        <WhyChooseUs />
        {/* <Newsletter /> */}
        <PartnerSection/>
      </main>
    </>
  );
};

export default Index;
