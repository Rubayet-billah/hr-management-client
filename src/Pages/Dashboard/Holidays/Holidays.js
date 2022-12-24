import { Table } from "flowbite-react";
import React from "react";
import HolidayRows from "./HolidayRows";

const Holidays = () => {
  const holidayList = [
    { day: "Tuesday", date: " 01 Jan, 2023", holiday: "New Year's Day" },
    {
      day: "Monday",
      date: " 14 Jan, 2023",
      holiday: "Makar Sankranti / Pongal",
    },
    { day: "Tuesday", date: " 26 Jan, 2023", holiday: "Republic Day" },
    { day: "Tuesday", date: " 04 Mar, 2023", holiday: "Maha Shivaratri" },
    { day: "Tuesday", date: " 01 Jan, 2023", holiday: "New Year's Day" },
    { day: "Tuesday", date: " 01 Jan, 2023", holiday: "New Year's Day" },
    { day: "Tuesday", date: " 01 Jan, 2023", holiday: "New Year's Day" },
    { day: "Tuesday", date: " 01 Jan, 2023", holiday: "New Year's Day" },
    { day: "Tuesday", date: " 01 Jan, 2023", holiday: "New Year's Day" },
    { day: "Tuesday", date: " 01 Jan, 2023", holiday: "New Year's Day" },
    { day: "Tuesday", date: " 01 Jan, 2023", holiday: "New Year's Day" },
    { day: "Tuesday", date: " 01 Jan, 2023", holiday: "New Year's Day" },
    { day: "Tuesday", date: " 01 Jan, 2023", holiday: "New Year's Day" },
    { day: "Tuesday", date: " 01 Jan, 2023", holiday: "New Year's Day" },
    { day: "Tuesday", date: " 01 Jan, 2023", holiday: "New Year's Day" },
    { day: "Tuesday", date: " 01 Jan, 2023", holiday: "New Year's Day" },
  ];

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
