"use client";
import { AppContext } from "@/context/AppContextProvider";
import Image from "next/image";
import { useContext } from "react";

const TeamCard = ({ name, role, img, id, desc }) => {
  const { setEmpModal } = useContext(AppContext);

  return (
    <div
      onClick={() => {
        setEmpModal({ id, name, img, role, desc });
        document.getElementById("employee-detail-modal").showModal();
      }}
      className="group relative aspect-[7/8] w-full cursor-pointer overflow-hidden rounded-lg transition-all active:scale-90"
    >
      <Image
        src={img}
        alt={name}
        className="absolute inset-0 -z-20 aspect-[7/8] w-full select-none rounded-lg object-cover object-top"
      />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-gradient-to-t from-black/70 to-transparent transition-all group-hover:from-black/30"></div>
      <div className="absolute inset-x-0 bottom-7 px-5 text-center text-white">
        <h2 className="text-xl font-medium leading-none">{name}</h2>
        <p className="">{role}</p>
      </div>
    </div>
  );
};
export default TeamCard;
