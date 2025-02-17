import GalleryGrid from "@/components/gallerypage_components/GalleryGrid";
import Intro from "@/components/gallerypage_components/Intro";

const page = () => {
  return (
    <div className="pb-10">
      <div className="flex flex-col gap-10">
        <Intro />
        <GalleryGrid />
      </div>
    </div>
  );
};
export default page;
