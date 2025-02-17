"use client";

import { Fragment, useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import TeamCard from "../TeamCard";
import { employees } from "@/constants";
import NoData from "../NoData";
import { slideLeft, SlideUp, slideYContainer } from "@/utils";

const TeamGrid = () => {
  const [filter, setFilter] = useState("view all");

  const filterOptions = [
    "view all",
    "directors",
    "management",
    "finance",
    "logistics",
    "operations",
  ];

  const [filteredEmployees, setFilteredEmployees] = useState(employees);

  const filterEmployees = useCallback(() => {
    if (filter === "view all") {
      return setFilteredEmployees(employees);
    } else {
      const newlist = [];

      employees.map((employee) => {
        if (employee.dept.includes(filter)) {
          newlist.push(employee);
        }
      });

      setFilteredEmployees(newlist);
    }
  }, [filter]);

  useEffect(() => {
    filterEmployees();
  }, [filter, filterEmployees]);

  return (
    <div>
      <div className="mx-auto flex w-fit flex-wrap gap-x-1 gap-y-5 text-sm">
        {filterOptions.map((option, index) => (
          <div key={index} className="relative">
            <button
              onClick={() => setFilter(option)}
              className={`px-4 py-1 font-medium capitalize transition-colors`}
            >
              {option}
            </button>
            {filter === option && (
              <motion.span
                layoutId="activeFilter"
                style={{ originY: "0px" }}
                transition={{
                  type: "spring",
                  stiffness: 420,
                  damping: 30,
                }}
                className="absolute inset-0 -z-10 rounded-full border-[1.5px] border-black bg-transparent"
              ></motion.span>
            )}
          </div>
        ))}
      </div>
      <motion.div
        variants={slideYContainer}
        animate="show"
        viewport={{ once: true }}
        initial="hidden"
        className="mt-10 grid grid-cols-1 gap-x-5 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        {filteredEmployees.length ? (
          filteredEmployees.map((employee, index) => (
            <AnimatePresence key={index}>
              <motion.div variants={SlideUp} key={index}>
                <TeamCard
                  name={employee.name}
                  role={employee.role}
                  img={employee.img}
                  id={employee.id}
                  desc={employee.desc}
                />
              </motion.div>
            </AnimatePresence>
          ))
        ) : (
          <div className="col-span-full">
            <NoData message={`No employees in the ${filter} department yet`} />
          </div>
        )}
      </motion.div>
    </div>
  );
};
export default TeamGrid;
