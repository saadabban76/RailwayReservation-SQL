import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <main className="flex flex-col">
      <div className="flex justify-between items-center pb-4 border-b border-gray-700">
        <div className="flex items-center space-x-2">
          <img src="/assets/logo.png" className="w-[65px]" alt="logo" />
          <h1 className="text-2xl max-sm:text-[1.3rem] text-yellow-400">
            Railway Reservations
          </h1>
        </div>
        <div className="flex space-x-4 items-center ">
          <button
            className=" 
        font-semibold text-[1rem] p-1 px-4 rounded-md"
            onClick={()=> navigate('/login')}
          >
            Login
          </button>
          <button
            onClick={()=> navigate('/login')}
            className="p-1 
        font-semibold text-red-400 text-[1rem] px-4 rounded-md"
          >
            Signup
          </button>
        </div>
      </div>
      <nav
        className="flex bg-yellow-800 
          space-x-16 items-center py-1 pl-10 "
      >
        <NavLink to="/">Home</NavLink>
        <NavLink to="/find-train">Find Train</NavLink>
        <NavLink to="/reservation">Reservation</NavLink>
        <NavLink to="/booking-history">Booking History</NavLink>
      </nav>
    </main>
  );
};

export default Navbar;
