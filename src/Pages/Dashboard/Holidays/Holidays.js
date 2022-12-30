import { Table, TextInput } from "flowbite-react";
import React, { useEffect, useState } from "react";
import Btn from "../../../components/Btn";
import { useUtils } from "../../../contexts/UtilsProvider";
import HolidayRows from "./HolidayRows";

const Holidays = () => {
  const [holidayList, setHolidayLinst] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/holidays")
      .then((res) => res.json())
      .then((data) => setHolidayLinst(data));
  }, []);

  // Change title
  const { setDashboardTitle } = useUtils();
  setDashboardTitle("Holidays");

  return (
    <section>
      <div className="w-2/6 lg:flex md:flex  gap-2 mb-8  hidden">
        <TextInput
          className="w-full"
          type="search"
          id="search"
          placeholder="Search Your Holiday"
          required={true}
          sizing="sm"
        />
        <Btn color="blue" className="w-fit px-4">
          Search
        </Btn>
      </div>
      <Table>
        <Table.Head>
          <Table.HeadCell>DAY</Table.HeadCell>
          <Table.HeadCell>DATE</Table.HeadCell>
          <Table.HeadCell>HOLIDAY</Table.HeadCell>
        </Table.Head>

        {holidayList.map((holidays) => (
          <HolidayRows key={holidays.id} holidays={holidays}></HolidayRows>
        ))}
      </Table>
    </section>
  );
};

export default Holidays;
