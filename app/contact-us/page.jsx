import ContactForm from "@/components/contactpage_components/ContactForm";
import Location from "@/components/contactpage_components/Location";

export const metadata = {
  title: "Contact Us",
  alternates: {
    canonical: "/contact-us",
  },
  url: "https://www.abinitio-energy.com/contact-us",
  type: "website",
};

const page = () => {
  return (
    <section className="pb-10 pt-0 md:pb-20">
      <div className="flex flex-col gap-10 md:gap-20">
        <ContactForm />
        <Location />
      </div>
    </section>
  );
};
export default page;
