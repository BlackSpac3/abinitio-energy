import Intro from "@/components/servicepage_components/Intro";
import ServiceList from "@/components/servicepage_components/ServiceList";

const page = () => {
  return (
    <div className="pb-10">
      <div className="flex flex-col gap-10">
        <Intro />
        <ServiceList />
      </div>
    </div>
  );
};
export default page;
