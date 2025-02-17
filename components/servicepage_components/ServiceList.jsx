import {
  fleet_leasing_img,
  food_del_img,
  haulage_img,
  support_team_img,
  transport_operation_img,
} from "@/assets";
import Image from "next/image";

const services = [
  {
    img: support_team_img,
    name: "Administration",
    desc: (
      <p>
        We have a comprehensive administration support team that process data on
        products which are scanned and stored electronically to allow easy
        access for copies to be sent to customers via email or fax where
        required. Full debrief procedures are in place to record order
        discrepancies, time of arrival, time of departure and volumes.
      </p>
    ),
  },
  {
    img: fleet_leasing_img,
    name: "Fleet Leasing and Management",
    desc: (
      <p>
        This is the contract hire and leasing side of the business. It
        incorporates car, bus and van contract hire from 12 months to five year.
        No matter what car you&apos;re looking for Fleet-Care can find the right
        deal at competitive rates. With customer service firmly at the top of
        the agenda, Fleet-Care have developed a reputation for taking as much
        care of individual clients as they do with major corporate clients
        across the Nigeria.
      </p>
    ),
  },
  // {
  //   img: food_del_img,
  //   name: "Food Service Distribution",
  //   desc: (
  //     <p>
  //       All deliveries are made using our own fleet of dual temperature vehicles
  //       i.e. chilled and ambient. The temperatures of all chilled products are
  //       carefully monitored and recorded from the time products are loaded unto
  //       our own transport, during the time they are stored and finally when they
  //       are delivered to you. <br /> <br /> We adhere strictly to all hygiene
  //       regulations and employ the services and expertise of a leading hygiene
  //       audit company who subject us to regular stringent inspections.
  //     </p>
  //   ),
  // },
  {
    img: haulage_img,
    name: "General Haulage",
    desc: (
      <p>
        Our 7 day Operation throughout the year to enable us to meet customer
        requirements. Our Company&apos;s policy is &apos;Customer First&apos;.
        Regular products carried include AGO, PMS and DPK.
      </p>
    ),
  },
  {
    img: transport_operation_img,
    name: "Transport Operations",
    desc: (
      <p>
        Our Operations department is highly focused on our customers&apos;
        requirements, resulting in high levels of flexibility, efficiency and
        control in the scheduling process; this allows us to respond effectively
        to short lead times and just in time deliveries. We can adapt and tailor
        a cost effective transport solution to suit your requirements. Our
        services have evolved to adapt to pressures such as road congestion and
        driver shortages. All vehicles are fitted with satellite tracking.
      </p>
    ),
  },
];

const ServiceCard = ({ name, img, desc }) => {
  return (
    <div className="flex flex-col gap-10 p-10 md:flex-row md:items-center md:group-even:flex-row-reverse">
      <div className="aspect-[8/6] w-full">
        <Image
          src={img}
          alt={name}
          className="h-full w-full rounded-lg object-cover"
        />
      </div>
      <div className="w-full md:group-even:text-right">
        <h2 className="text-3xl font-bold md:text-4xl">{name}</h2>
        <div className="mt-4 text-sm text-gray-400">{desc}</div>
      </div>
    </div>
  );
};
const ServiceList = () => {
  return (
    <section>
      <div className="flex flex-col gap-10">
        {services.map((service, index) => (
          <div key={index} className="group">
            <ServiceCard
              name={service.name}
              img={service.img}
              desc={service.desc}
            />
            {index + 1 !== services.length && <hr className="mt-5" />}
          </div>
        ))}
      </div>
    </section>
  );
};
export default ServiceList;
