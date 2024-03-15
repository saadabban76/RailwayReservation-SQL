import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import Login from "./Login";
import Reservation from "./Reservation";

const Body = () => {
  return (
    <main className="h-full">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reservations" element={<Reservation />} />
          <Route path="/path" element={<h1>path</h1>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<h1>path</h1>} />
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default Body;
