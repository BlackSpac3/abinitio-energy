import About from "@/components/homepage_components/About";
import EasyTransport from "@/components/homepage_components/EasyTransport";
import Hero from "@/components/homepage_components/hero";
import Hero2 from "@/components/homepage_components/Hero2";
import Services from "@/components/homepage_components/Services";
import WhyChooseUs from "@/components/homepage_components/WhyChooseUs";

export default function Home() {
  return (
    <div className="flex flex-col gap-10 pb-10 sm:gap-20 sm:pb-20">
      <Hero2 />
      <About />
      <WhyChooseUs />
      <EasyTransport />
      <Services />
    </div>
  );
}
