import React, { useState } from "react";

const EditUser = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    dob: "",
    gender: "",
    maritalStatus: "",
    mobileNo: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    };
    

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <main className='px-7 py-10'>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-md shadow-md"
      >
        <h2 className="text-2xl font-semibold text-black mb-6">Edit Profile</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="text-gray-600">
              First Name:
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-black"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="text-gray-600">
              Last Name:
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-black"
            />
          </div>
          <div>
            <label htmlFor="email" className="text-gray-600">
              E-Mail:
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-black"
            />
          </div>
          <div>
            <label htmlFor="dob" className="text-gray-600">
              Dob:
            </label>
            <input
              type="date"
              name="dob"
              id="dob"
              value={formData.dob}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-black"
            />
          </div>
          <div>
            <label htmlFor="gender" className="text-gray-600">
              Gender:
            </label>
            <select
              name="gender"
              id="gender"
              value={formData.gender}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-black"
            >
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label htmlFor="maritalStatus" className="text-gray-600">
              Marital Status:
            </label>
            <select
              name="maritalStatus"
              id="maritalStatus"
              value={formData.maritalStatus}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-black"
            >
              <option value="">Select</option>
              <option value="unmarried">Unmarried</option>
              <option value="married">Married</option>
              <option value="divorced">Divorced</option>
            </select>
          </div>
          <div>
            <label htmlFor="mobileNo" className="text-gray-600">
              Mobile No:
            </label>
            <input
              type="tel"
              name="mobileNo"
              id="mobileNo"
              value={formData.mobileNo}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-black"
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full p-2 mt-6 bg-yellow-700 mt-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        >
          Save Changes
        </button>
      </form>
    </main>
  );
};

export default EditUser;
