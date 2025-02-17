import FAQs from "@/components/aboutpage_components/FAQs";
import Intro from "@/components/aboutpage_components/Intro";
import Team from "@/components/aboutpage_components/Team";
import Unique from "@/components/aboutpage_components/Unique";
import Values from "@/components/aboutpage_components/Values";

export const metadata = {
  title: "About",
  alternates: {
    canonical: "/about",
  },
  url: "https://www.abinitio-energy.com/about",
  type: "website",
};

const page = () => {
  return (
    <div className="pb-10 md:pt-5">
      <div className="flex flex-col gap-10 sm:gap-20">
        <Intro />
        <Values />
        <Unique />
        <Team />
        <FAQs />
      </div>
    </div>
  );
};
export default page;
