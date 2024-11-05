import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
const Login = () => {
  const navigate = useNavigate();
  const imageRef = useRef(null);
  const formRef = useRef(null);
  const textRef = useRef(null);

  // states

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // functions

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        { email, password }
      );
      console.log(response);
    } catch (error) {}
  };

  // animations
  useEffect(() => {
    gsap.fromTo(
      imageRef.current,
      {
        x: -100,
        opacity: 0,
      },
      { x: 0, opacity: 1, duration: 1 }
    );
    gsap.fromTo(
      formRef.current,
      { x: 100, opacity: 0 },
      { x: 0, opacity: 1, duration: 2 }
    );
    gsap.fromTo(textRef.current, { y: -100, opacity: 0 }, { y: 0, opacity: 1 });
  }, []);
  return (
    <div className="h-screen w-full bg-gradient-to-br from-dark-blue to-navy flex items-center flex-col mx-auto">
      <div
        ref={textRef}
        className="text text-4xl text-beige mt-4 mb-5 text-center"
      >
        Employee Management System
      </div>

      <div className="w-full h-full p-5 flex gap-10 items-center justify-center">
        <div
          ref={imageRef}
          className=" h-[600px] w-[500px] bg-beige overflow-hidden shadow-2xl "
        >
          <img
            src="./images/login.jpeg"
            alt="Login"
            className="h-full w-full object-cover" // Updated class names
          />
        </div>
        <div
          ref={formRef}
          className="h-[500px] w-[500px] bg-white  flex flex-col backdrop-filter backdrop-blur-lg bg-opacity-30 border rounded-lg  items-center  shadow-2xl"
        >
          <div className="text text-2xl text-beige font-extrabold mt-2 p-4">
            <h2> Login</h2>
          </div>
          <div className="form flex flex-col p-5 items-start pl-10  h-full w-full">
            <form action="" onSubmit={handleSubmit}>
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-[400px] p-2 rounded-lg  border border-1 border-navy outline-none"
                  placeholder="Enter your password here"
                />
              </div>

              <div className="mb-3 mt-10 flex ">
                <div className="flex flex-1 gap-3 items-center">
                  {" "}
                  <input
                    type="checkbox"
                    id="checkbox"
                    className=" p-2 appearance-none h-5 w-5 rounded-full border border-1 border-light-blue bg-white focus:outline-none checked:bg-dark-blue "
                  />
                  <label
                    htmlFor="checkbox"
                    className="flex gap-3 text-xl text-gray"
                  >
                    Remeber me?
                  </label>
                </div>
                <div>
                  <h2 className="font-bold text-dark-blue cursor-pointer">
                    Fogot password?
                  </h2>
                </div>
              </div>
              <div className="mb-3 mt-20">
                <button
                  type="submit "
                  className="w-full flex  justify-center rounded-xl p-4 border border-2 border-dark-blue hover:bg-dark-blue hover:text-beige text-2xl font-bold shadow-sm"
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
