import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add logic here to submit the form with the username and password
  };

  return (
    <form
      className="mx-auto mt-20 p-4 py-10 rounded-md bg-gray-800 border border-white w-max flex flex-col items-start space-y-8"
      onSubmit={handleSubmit}
    >
      <div>
        <label className="mr-4 text-yellow-500 text-xl">Username:</label>
        <input
          type="text"
          value={username}
          className='bg-gray-900 opacity-3 text-white border'
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div>
        <label className='mr-4 text-yellow-500 text-xl'>Password:</label>
        <input
          type="password"
          value={password}
          className='bg-gray-900 opacity-3 text-white border'
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button className='w-full bg-yellow-600 rounded-md py-1' type="submit">Login</button>
      {!username && (
        <p>
          You don{"`"}t have register? <a className='text-blue-300' href="/signup">Signup</a>
        </p>
      )}
    </form>
  );
};

export default Login;
