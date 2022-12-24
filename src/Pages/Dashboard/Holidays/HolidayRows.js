import { Table } from "flowbite-react";
import React from "react";

const HolidayRows = ({ holidays }) => {
  return (
    <>
      <Table.Body className="divide-y">
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell className="whitespace-nowrap  font-medium text-gray-900 dark:text-white">
            {holidays.day}
          </Table.Cell>
          <Table.Cell className="">{holidays.date}</Table.Cell>
          <Table.Cell>{holidays.holiday}</Table.Cell>
        </Table.Row>
      </Table.Body>
    </>
  );
};

export default HolidayRows;
