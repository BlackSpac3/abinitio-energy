import { employees } from "@/constants";
import Link from "next/link";
import { Fragment } from "react";
import TeamCard from "../TeamCard";

const Team = () => {
  return (
    <div>
      <h2 className="text-primary">Leadership and Expertise</h2>
      <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center md:gap-20">
        <div>
          <h3 className="mt-5 text-3xl font-bold md:text-4xl">Meet our team</h3>
          <p className="mt-4 max-w-[540px] text-sm text-gray-400">
            Our team of seasoned professionals brings decades of logistics and
            supply chain experience, fueling our commitment to excellence and
            client success.
          </p>
        </div>
        <Link
          href="/our-team"
          className="whitespace-nowrap rounded-lg py-2 transition-colors hover:text-primary md:px-5"
        >
          <p> View all team members</p>
          <div className="h-[2px] w-full bg-primary"></div>
        </Link>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
        {employees.slice(0, 3).map((employee, index) => (
          <Fragment key={index}>
            <TeamCard
              name={employee.name}
              role={employee.role}
              img={employee.img}
              id={employee.id}
              desc={employee.desc}
            />
          </Fragment>
        ))}
      </div>
    </div>
  );
};
export default Team;
