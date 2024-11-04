import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen w-full bg-gradient-to-br from-dark-blue to-navy flex items-center flex-col mx-auto">
      <div className="text text-4xl text-beige mt-4 mb-5 text-center">
        Employee Management System
      </div>

      <div className="w-full h-full p-5 flex gap-10 items-center justify-center">
        <div className="h-[600px] w-[500px] bg-beige overflow-hidden shadow-2xl">
          <img
            src="./images/login.jpeg"
            alt="Login"
            className="h-full w-full object-cover" // Updated class names
          />
        </div>
        <div className="h-[500px] w-[500px] bg-white  flex flex-col backdrop-filter backdrop-blur-lg bg-opacity-30 border rounded-lg  items-center  shadow-2xl">
          <div className="text text-2xl text-beige font-extrabold mt-2 p-4">
            <h2> Login</h2>
          </div>
          <div className="form flex flex-col p-5 items-start  h-full w-full">
            <form action="">
              <div className="flex flex-col gap-2 mb-2">
                <label
                  htmlFor="email "
                  className="text-xl font-bold text-dark-blue"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="w-[400px] p-2 rounded-lg  border border-1 border-navy outline-none"
                  placeholder="Enter your Mail here"
                />
              </div>
              <div className="flex flex-col gap-2 mb-2">
                <label
                  htmlFor="password "
                  className="text-xl font-bold text-dark-blue"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="w-[400px] p-2 rounded-lg  border border-1 border-navy outline-none"
                  placeholder="Enter your password here"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
