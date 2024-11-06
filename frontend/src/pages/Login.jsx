import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import axios from "axios"; // Don't forget to import axios for API calls

const Login = () => {
  const navigate = useNavigate();
  const imageRef = useRef(null);
  const formRef = useRef(null);

  // States
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Functions
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        { email, password }
      );
      console.log(response);
      // navigate or handle success response
    } catch (error) {
      console.error(error);
    }
  };

  // Animations
  useEffect(() => {
    gsap.fromTo(
      imageRef.current,
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1 }
    );
    gsap.fromTo(
      formRef.current,
      { x: 100, opacity: 0 },
      { x: 0, opacity: 1, duration: 2 }
    );
  }, []);

  return (
    <div className="h-screen w-full bg-gradient-to-br from-dark-blue to-navy flex items-center justify-center flex-col mx-auto">
      <div className="w-full h-full p-5 flex flex-col laptop:flex-row gap-5 laptop:gap-10 items-center justify-center">
        {/* Image Section */}
        <div
          ref={imageRef}
          className="w-full h-60 phone:h-80 tablet:h-96 laptop:h-[600px] laptop:w-[500px] bg-beige overflow-hidden shadow-2xl flex-shrink-0"
        >
          <img
            src="./images/login.jpeg"
            alt="Login"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Form Section */}
        <div
          ref={formRef}
          className="w-full max-w-sm laptop:max-w-md bg-white flex flex-col backdrop-filter backdrop-blur-lg bg-opacity-30 border rounded-lg items-center shadow-2xl"
        >
          <div className="text-2xl text-dark-blue font-extrabold mt-4 p-4">
            <h2>Login</h2>
          </div>
          <div className="form flex flex-col p-5 items-start h-full w-full">
            <form action="" onSubmit={handleSubmit}>
              {/* Email Field */}
              <div className="flex flex-col gap-2 mb-4">
                <label
                  htmlFor="email"
                  className="text-lg font-bold text-dark-blue"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-2 rounded-lg border border-1 border-navy outline-none"
                  placeholder="Enter your email here"
                />
              </div>

              {/* Password Field */}
              <div className="flex flex-col gap-2 mb-4">
                <label
                  htmlFor="password"
                  className="text-lg font-bold text-dark-blue"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-2 rounded-lg border border-1 border-navy outline-none"
                  placeholder="Enter your password here"
                />
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="mb-3 mt-10 flex gap-5">
                <div className="flex flex-1 gap-3 items-center">
                  <input
                    type="checkbox"
                    id="checkbox"
                    className="p-2 appearance-none h-5 w-5 rounded-full border border-1 border-light-blue bg-white focus:outline-none checked:bg-dark-blue"
                  />
                  <label
                    htmlFor="checkbox"
                    className="flex gap-3 text-xl text-gray"
                  >
                    Remember me?
                  </label>
                </div>
                <div>
                  <h2 className="font-bold text-dark-blue cursor-pointer">
                    Forgot password?
                  </h2>
                </div>
              </div>

              {/* Submit Button */}
              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full transition ease-in hover:-translate-y-1 rounded-xl p-3 bg-dark-blue text-beige text-xl font-bold hover:bg-beige hover:text-dark-blue"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
