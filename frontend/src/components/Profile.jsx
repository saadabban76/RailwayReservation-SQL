import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState();

  const localUser = localStorage.getItem("user")
    ? String(localStorage.getItem("user"))
    : null; // gets the user value from the localStorage.

  const getUser = async () => {
    try {
      const response = await axios.post("http://localhost:3000/getuser", {
        user: localUser
      });
      setUser(await response.data.data);
    } catch (e) {
      console.log("error white getting the user details.");
      toast.error("User not found.", {
        position: "bottom"
      });
      throw new e();
    }
  };

    const editHandler = (e) => {
        e.preventDefault();
        navigate('/edituser');
  };

  useEffect(() => {
    if (!localUser || localUser === null) {
      toast.error("please login before accessing the page .");
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } else {
      getUser();
    }
  }, []);

  return (
    <main className="p-6">
      <div className="bg-gray-200 text-black p-8 rounded-md shadow-md">
        <h2 className="text-2xl font-semibold">Profile</h2>

        <div className="grid grid-cols-2 gap-4 mt-6">
          <div>
            <p className="text-gray-600">First Name:</p>
            <p>{user?.f_name}</p>
          </div>
          <div>
            <p className="text-gray-600">Last Name:</p>
            <p>{user?.l_name}</p>
          </div>
          <div>
            <p className="text-gray-600">E-Mail:</p>
            <p>{user?.email}</p>
          </div>
          <div>
            <p className="text-gray-600">Dob:</p>
            <p>{user?.dob}</p>
          </div>
          <div>
            <p className="text-gray-600">Gender:</p>
            <p>{user?.gender}</p>
          </div>
          <div>
            <p className="text-gray-600">Marital Status:</p>
            <p>{user?.marital}</p>
          </div>
          <div>
            <p className="text-gray-600">Mobile No:</p>
            <p>{user?.mobile}</p>
          </div>
          {/* <div>
            <p className="text-gray-600">Security Question:</p>
            <p>What is your favorite movie?</p>
          </div>
          <div>
            <p className="text-gray-600">Security Answer:</p>
            <p>Avengers</p>
          </div> */}
        </div>
        <div className="flex items-center mt-10 animate-pulse justify-between">
          <button
            onClick={editHandler}
            className="text-xl font-semibold text-yellow-700 hover:underline"
          >
            Edit Profile
          </button>
        </div>
      </div>
    </main>
  );
};

export default Profile;
