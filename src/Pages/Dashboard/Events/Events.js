import React from "react";
import { useUtils } from "../../../contexts/UtilsProvider";
import Calendar from "./Calendar";

const Events = () => {
  // Change title
  const { setDashboardTitle } = useUtils();
  setDashboardTitle("Events");

  return (
    <section className="bg-white p-8 rounded-lg">
      <Calendar />
    </section>
  );
};

export default Events;
