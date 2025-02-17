const Location = () => {
  return (
    <div>
      <div className="flex flex-col-reverse items-center gap-10 md:flex-row">
        <div className="aspect-[8/7] w-full">
          <iframe
            width="100%"
            height="100%"
            scrolling="no"
            className="aspect-square rounded-xl"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=32,%20Macarthy%20Street,%20Lagos%20Island,%20Lagos%20Nigeria+(Abinitio%20Energy)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
            <a href="https://www.gps.ie/">gps trackers</a>
          </iframe>
        </div>
        <div className="w-full">
          <h2 className="text-primary">Our Location</h2>
          <p className="mt-5 text-2xl font-bold">Connecting near and far</p>
          <h3 className="mt-5 text-lg font-medium">Headquaters</h3>
          <p className="mt-1 text-sm text-gray-400">
            Abinitio Energy <br /> 32 MaCarthy Street, <br />
            Lagos Island, 102273, <br />
            Lagos, Nigeria.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Location;
