import Image from "next/image";
import { gallery_data } from "@/constants";

const GalleryGrid = () => {
  return (
    <div className="grid grid-cols-3 gap-5">
      {gallery_data.map((image, index) => (
        <div key={index}>
          <Image
            src={image.img}
            alt=""
            className="aspect-[3/2] w-full rounded-lg object-cover"
          />
        </div>
      ))}
    </div>
  );
};
export default GalleryGrid;
