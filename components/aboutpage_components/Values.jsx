import { Handshake, HeartHandshake, Lightbulb, Scale } from "lucide-react";
import { Fragment } from "react";

const AboutCards = ({ heading, desc, icon }) => {
  return (
    <div className="rounded-lg bg-white p-6">
      {icon}
      <h3 className="text-md mt-5 font-medium leading-tight">{heading}</h3>
      <p className="text-sm text-gray-400">{desc}</p>
    </div>
  );
};

const values = [
  {
    name: "Integrity",
    desc: "Building trust through transparency and accountability.",
    icon: (
      <div className="w-fit rounded-md bg-blue-100 p-2 text-blue-500">
        <Scale className="size-7 stroke-1" />
      </div>
    ),
  },
  {
    name: "Innovation",
    desc: "Leveraging technology to deliver smarter logistics solutions.",
    icon: (
      <div className="w-fit rounded-md bg-orange-100 p-2 text-orange-500">
        <Lightbulb className="size-7 stroke-1" />
      </div>
    ),
  },
  {
    name: "Commitment",
    desc: "Ensuring excellence in every project we undertake.",
    icon: (
      <div className="w-fit rounded-md bg-rose-100 p-2 text-rose-500">
        <HeartHandshake className="size-7 stroke-1" />
      </div>
    ),
  },
];
const Values = () => {
  return (
    <div>
      <h2 className="text-primary">Our Core Values</h2>
      <p className="mt-5 text-3xl font-bold md:text-4xl">
        On-Time Delivery, <br /> Guaranteed
      </p>
      <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
        {values.map((value, index) => (
          <Fragment key={index}>
            <AboutCards
              heading={value.name}
              desc={value.desc}
              icon={value.icon}
            />
          </Fragment>
        ))}
      </div>
    </div>
  );
};
export default Values;
