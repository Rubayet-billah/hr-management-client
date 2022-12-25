import { Table } from "flowbite-react";
import React, { useEffect, useState } from "react";
import HolidayRows from "./HolidayRows";

const Holidays = () => {
  const [holidayList, setHolidayLinst] = useState([]);
  useEffect(() => {
    fetch("/Holidays.json")
      .then((res) => res.json())
      .then((data) => setHolidayLinst(data));
  }, []);

  return (
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
  );
};

export default Holidays;
