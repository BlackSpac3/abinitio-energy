import {
  Facebook,
  Instagram,
  Send,
  SendHorizonal,
  Twitter,
} from "lucide-react";
const ContactUsPage1 = () => {
  return (
    <section className="pb-20">
      <div className="flex items-start gap-20">
        <div className="w-full">
          <h2 className="text-primary">Get in touch</h2>
          <p className="mt-5 text-4xl font-bold">
            We are always ready to help you and answer your questions
          </p>
          <p className="mt-4 text-sm text-gray-400">
            Use our contact form for all information requests or contact us
            directly using any of our contact information below. All information
            is treated with complete confidentiality and in accordance with our
            data protection statement.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-5 gap-y-10">
            <div>
              <h3 className="text-lg font-medium">Call Center</h3>
              <p className="mt-4">+234-808-044-8044</p>
            </div>
            <div>
              <h3 className="text-lg font-medium">Our Location</h3>
              <p className="mt-4">
                32 MaCathy Street, Lagos Island, Lagos, Nigeria.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium">Email</h3>
              <p className="mt-4">logistics@abinitio-energy.com</p>
            </div>
            <div>
              <h3 className="text-lg font-medium">Social Network</h3>
              <div className="mt-4 flex items-center gap-4">
                <Instagram /> <Twitter /> <Facebook />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full rounded-2xl bg-white p-20">
          <form action="">
            <h2 className="text-2xl font-medium">Get in Touch</h2>
            <p className="mt-2 text-sm text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              illum nostrum quos at omnis.
            </p>

            <div className="mt-10 flex flex-col gap-5">
              <input
                type="text"
                placeholder="Full Name"
                className="border-b py-2 outline-none transition-all focus:border-b-primary"
              />
              <input
                type="email"
                placeholder="Email"
                className="border-b py-2 outline-none transition-all focus:border-b-primary"
              />
              <input
                type="text"
                placeholder="Subject"
                className="border-b py-2 outline-none transition-all focus:border-b-primary"
              />
              <textarea
                rows={5}
                type="text"
                placeholder="Message"
                className="resize-none border-b py-2 outline-none transition-all focus:border-b-primary"
              />
            </div>
            <button className="mt-10 w-full rounded-lg bg-primary px-5 py-2 text-white">
              <p>Send Message</p>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
export default ContactUsPage1;
