import React, { useState } from "react";
import { FiDelete } from "react-icons/fi";
import { BiPlusCircle } from "react-icons/bi";
import { BiMinusCircle } from "react-icons/bi";

const EmployeeRow = ({ employee }) => {
  //console.log(employee);
  const { fname, lname, image, email, phone, dept, salary } = employee;
  const [absent, setAbsent] = useState(0);
  const [deductionAmount, setDeductionAmount] = useState(0);
  const [netPayAmount, setNetPayAmount] = useState(salary);
  // const [days, setDays] = useState(0);
  // const date = new Date();
  // const getDaysInMonth = (year, month) => {
  //   return new Date(year, month, 0).getDate();
  // };

  const handleProcessSalary = () => {
    // const currentYear = date.getFullYear();
    // const currentMonth = date.getMonth() + 1;
    // const daysInCurrentMonth = getDaysInMonth(currentYear, currentMonth);
    // setDays(daysInCurrentMonth);

    const deductAmount = (salary / 30) * absent;
    const deductAmountFinal = Math.ceil(deductAmount);
    const netSalary = salary - deductAmount;
    const netSalaryFinal = Math.floor(netSalary);
    // console.log(deductAmountFinal);
    // console.log(netSalaryFinal);
    setDeductionAmount(deductAmountFinal);
    setNetPayAmount(netSalaryFinal);
  };
  // console.log(days);
  console.log(typeof days);
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <th
        scope="row"
        className="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap dark:text-white"
      >
        <img className="w-10 h-10 rounded-full" src={image} alt={fname} />
        <div className="pl-3">
          <div className="text-base font-semibold">
            {fname} {lname}
          </div>
          <div className="font-normal text-gray-500">{email}</div>
        </div>
      </th>

      <td className="py-4 px-6">Web Developer</td>
      <td className="py-4 px-6">{dept}</td>
      <td className="py-4 px-6">
        <div className="flex">
          <button
            onClick={() => setAbsent(absent - 1)}
            className="text-lg mr-2"
          >
            <BiMinusCircle />
          </button>
          <div>
            <p>{absent}</p>
          </div>
          <button
            onClick={() => setAbsent(absent + 1)}
            className="text-lg ml-2 "
          >
            <BiPlusCircle />
          </button>
        </div>
      </td>
      <td className="py-4 px-6">{salary}</td>
      <td className="py-4 px-6">{deductionAmount}</td>
      <td className="py-4 px-6">{netPayAmount}</td>
      <td className="py-4 px-6">
        <div className="flex">
          <button
            onClick={handleProcessSalary}
            className="btn bg-red-500 text-black py-2 px-3 rounded-md"
          >
            Process
          </button>
        </div>
      </td>
    </tr>
  );
};
export default EmployeeRow;
