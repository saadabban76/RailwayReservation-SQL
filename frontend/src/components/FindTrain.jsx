import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "sonner";

const FindTrain = () => {
  const user = localStorage.getItem("user")
    ? String(localStorage.getItem("user"))
    : null; // gets the user value from the localStorage.

  const navigate = useNavigate();

  useEffect(() => {
    if (!user || user === null) {
      toast.error("please login before accessing the page .");
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  }, []);

  return (
    <main className="p-6 flex flex-col space-y-6">
      <Toaster />
      {/* top */}
      <div className="flex justify-evenly items-center py-5 rounded-md bg-gray-500 text-white">
        <h1>Search Train</h1>
        <select
          className="bg-gray-100  text-black px-3 rounded-md"
          name="select"
          id="select"
        >
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
        <div className="flex gap-2">
          <label htmlFor="from">From : </label>
          <input type="text" id="from" placeholder="City or Station" />
        </div>

        <div className="flex gap-2">
          <label htmlFor="to">To : </label>
          <input type="text" id="to" placeholder="City or Station" />
        </div>
        <button className="px-4 font-semibold rounded-lg shadow-md bg-yellow-500 hover:bg-green-700 text-black focus :outline-none focus:ring-2">
          Find
        </button>
      </div>
      <div className="w-full rounded-md max-h-max overflow-y-scroll space-y-10 p-6 flex text-white font-medium flex-col bg-gray-500">
        <table className="border p-4">
          <thead className="border-b">
            <th>Train No.</th>
            <th>Train Name</th>
            <th>Class Type</th>
            <th>Destination</th>
            <th>Arrival</th>
            <th>Departure</th>
            <th>M</th>
            <th>T</th>
            <th>W</th>
            <th>T</th>
            <th>F</th>
            <th>S</th>
            <th>S</th>
          </thead>
          <tbody>
            <tr className="text-center">
              <td>1</td>
              <td>Tadkal</td>
              <td>asdf</td>
              <td>bangalore</td>
              <td>chennai</td>
              <td>asdf</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default FindTrain;
