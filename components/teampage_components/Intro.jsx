const Intro = () => {
  return (
    <div className="mx-auto mt-0 flex w-full flex-col items-center gap-2 sm:mt-10 sm:w-[80%] sm:text-center">
      <h1 className="text-3xl font-bold text-foreground sm:text-4xl">
        We&apos;ve got an entire <span className="text-primary">team</span>{" "}
        dedicated to supporting you and your business
      </h1>
      <p className="mt-2 w-full text-sm text-gray-400 md:w-[65%]">
        Our philosophy is simple, hire great people and give them the resources
        and support to do their best work
      </p>
    </div>
  );
};
export default Intro;
