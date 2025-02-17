import Image from "next/image";
import { gallery_data } from "@/constants";

const GalleryGrid = () => {
  return (
    <div className="grid-cols-auto-fill-280 grid gap-5">
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
