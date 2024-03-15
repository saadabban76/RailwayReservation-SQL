import { useState } from "react";
import DatePicker from "react-date-picker";

const Reservation = () => {
  const [reservation, setReservation] = useState({
    from: null,
    to: null,
    quota: 0
  });
  const [date, setDate] = useState("none");

  const fromHandler = (e) => {
    e.preventDefault();
    setReservation({ from: e.target.value });
  };

  const toHandler = (e) => {
    e.preventDefault();
    setReservation({ to: e.target.value });
  };

  const quotaHandler = (e) => {
    e.preventDefault();
    setReservation({ quota: e.target.value });
  };

  const onDateChange = (event) => {
    setDate(event.target.value);
  };

  return (
    <main className="p-2 flex space-x-4">
      {/* left side */}
      <div className="flex-[0.8] p-6 flex text-black w-max flex-col bg-gray-300">
        <div className="flex space-x-4 ">
          <label>From : </label>
          <input type="text" className="text-black" onChange={fromHandler} />
        </div>
        <div className="flex space-x-4">
          <label>To : </label>
          <input type="text" className="text-black" onChange={toHandler} />
        </div>
        <div className="flex space-x-4">
          <label>Quota : </label>
          <input type="text" className="text-black" onChange={quotaHandler} />
        </div>
        <div className="flex space-x-4">
          <label>Date : </label>
          <input
            type="date"
            className="text-black border border-gray-800"
            value={date}
            onChange={onDateChange}
          />
        </div>
      </div>
          <div className='flex-1'>
              Hii
      </div>
    </main>
  );
};

export default Reservation;
