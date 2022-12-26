import React, { useEffect, useState } from "react";
import EmployeeRow from "./Components/EmployeeRow";

const Payroll = () => {
  const [employees, setEmployees] = useState([]);
  // const [absent, setAbsent] = useState

  useEffect(() => {
    fetch("/employees.json")
      .then((res) => res.json())
      .then((data) => setEmployees(data));
  }, []);

  return (
    <>
      <div className="min-h-screen">
        <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="py-3 px-6">
                  Name
                </th>
                <th scope="col" className="py-3 px-6">
                  Designation
                </th>
                <th scope="col" className="py-3 px-6">
                  Department
                </th>
                <th scope="col" className="py-3 px-6">
                  No. of Absent
                </th>
                <th scope="col" className="py-3 px-6">
                  Salary
                </th>
                <th scope="col" className="py-3 px-6">
                  Deduction Amount
                </th>
                <th scope="col" className="py-3 px-6">
                  Net Payable
                </th>
                <th scope="col" className="py-3 px-6">
                  Salary Process
                </th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee) => (
                <EmployeeRow key={employee._id} employee={employee} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Payroll;
