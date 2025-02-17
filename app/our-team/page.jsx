import Intro from "@/components/teampage_components/Intro";
import TeamGrid from "@/components/teampage_components/TeamGrid";

export const metadata = {
  title: "Our Team",
  alternates: {
    canonical: "/our-team",
  },
  url: "https://www.abinitio-energy.com/our-team",
  type: "website",
};

const page = () => {
  return (
    <div className="flex flex-col gap-10 pb-10 sm:gap-16 sm:pb-20">
      <Intro />
      <TeamGrid />
    </div>
  );
};
export default page;
