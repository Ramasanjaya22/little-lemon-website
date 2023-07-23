import React, { useReducer } from "react";
import Heading from "../sections/reservePages/Heading";
import ReservationForm from "../sections/reservePages/Booking";
import { fetchAPI } from "../utils/bookingAPI";
const Reservation = () => {
  function updateTimes(date) {
    return fetchAPI(date);
  }

  const output = fetchAPI(new Date());

  const [availableTimes, dispatch] = useReducer(updateTimes, output);

  return (
    <>
      <Heading />
      <ReservationForm availableTimes={availableTimes} updateTimes={dispatch} />
    </>
  );
};

export default Reservation;
