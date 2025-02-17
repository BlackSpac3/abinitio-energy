const ContactForm = () => {
  return (
    <div className="flex flex-col items-start gap-10 md:grid md:grid-cols-[1.1fr_1fr] md:gap-20">
      <div className="w-full md:py-10">
        <h2 className="text-4xl font-bold">Contact Us</h2>
        <p className="mt-4 text-sm text-gray-400">
          Email, call, or complete the form to learn how Abinitio Energy can
          solve your logistics problems.
        </p>
        <p className="mt-2 text-sm text-gray-500">
          logistics@abinitio-energy.com
        </p>
        <p className="mt-2 text-sm text-gray-500">+234-808-044-8044</p>
        <p className="mt-2 text-sm underline">Customer Support</p>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <h3 className="text-lg font-medium">Customer Support</h3>
            <p className="mt-1 text-sm text-gray-400">
              Our support team is available round the clock to address any
              concerns or queries you may have.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium">Feedback and Suggestions</h3>
            <p className="mt-1 text-sm text-gray-400">
              We value your feedback and are conmtinuosly working to improve.
              Your input is crucial in shaping the future of Abinitio Energy.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full rounded-xl bg-white p-10 shadow-xl">
        <form action="">
          <h2 className="text-2xl font-medium">Get in Touch</h2>
          <p className="text-sm text-gray-400">You can reach us anytime</p>

          <div className="mt-7 flex flex-col gap-5">
            <div className="flex gap-2">
              <input
                type="text"
                name="fname"
                required
                placeholder="First Name"
                className="w-full border-b px-1 py-2 outline-none transition-all focus:border-b-primary"
              />
              <input
                type="text"
                name="lname"
                placeholder="Last Name"
                className="w-full border-b px-1 py-2 outline-none transition-all focus:border-b-primary"
              />
            </div>
            <input
              type="email"
              name="email"
              required
              placeholder="Email"
              className="border-b px-1 py-2 outline-none transition-all focus:border-b-primary"
            />
            {/* <input
                type="text"
                placeholder="Subject"
                className="border-b py-2 outline-none transition-all focus:border-b-primary"
              /> */}
            <textarea
              rows={4}
              type="text"
              name="message"
              required
              placeholder="How can we help?"
              className="resize-none border-b px-1 py-2 outline-none transition-all focus:border-b-primary"
            />
          </div>
          <button className="mt-5 w-full rounded-lg bg-primary px-5 py-2 text-white">
            <p>Send Message</p>
          </button>
          <p className="mt-2 text-center text-sm text-gray-400">
            By contacting us, you agree to our{" "}
            <span className="text-primary"> Terms of service</span> and{" "}
            <span className="text-primary">Privacy Policy</span>
          </p>
        </form>
      </div>
    </div>
  );
};
export default ContactForm;
