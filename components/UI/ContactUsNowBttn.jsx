"use client";
import { useRouter } from "next/navigation";

const ContactUsNowBttn = () => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push("/contact-us")}
      className="bg-primary-light rounded-lg px-8 py-2 text-primary transition-all hover:bg-primary hover:text-white active:scale-90"
    >
      Conatct Us Now
    </button>
  );
};
export default ContactUsNowBttn;
