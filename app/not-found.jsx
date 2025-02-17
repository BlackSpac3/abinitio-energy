import Link from "next/link";

const NotFound = () => {
  return (
    <div className="-mt-16 flex h-screen items-center justify-center">
      <div className="flex max-w-[480px] flex-col items-center">
        <p className="text-2xl">404 | Page not found</p>
        <p className="mt-2 text-center text-sm text-gray-400">
          Sorry, the page you&apos;re looking for might have been moved,
          deleted, or never existed. You can always{" "}
          <Link href="/">
            <span className="text-primary underline-offset-1 hover:underline">
              go back home
            </span>
          </Link>{" "}
          and continue exploring.
        </p>
        {/* <Link href="/">
          <p className="mt-3 text-primary underline underline-offset-4">
            Go back home
          </p>
        </Link> */}
      </div>
    </div>
  );
};

export default NotFound;
