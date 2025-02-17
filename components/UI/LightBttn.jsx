"use client";
import { useRouter } from "next/navigation";

const LightBttn = ({ path, text }) => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push(path)}
      className="rounded-lg bg-primary-light px-8 py-2 text-primary transition-all hover:bg-primary hover:text-white active:scale-90"
    >
      {text}
    </button>
  );
};
export default LightBttn;
