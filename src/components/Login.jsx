import { React, useContext, useState } from "react";

import bg_image from "../assets/bg-img.jpeg";

import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { toast } from "react-toastify";
import { AuthContext } from "../context/AuthContext";
export default function Login() {
  const { login } = useAuth();

  const [user, setUser] = useState({ email: "", password: "" });

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login({
        email: user.email,
        password: user.password,
      });
      toast.success("Logged in successfully");
      navigate("/");
    } catch (err) {
      toast.error("Oops! Something went wrong");
    } finally {
      setUser({
        email: "",
        password: "",
      });
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    setUser({ ...user, [e.target.id]: e.target.value });
  };

  return (
    <div className=" flex justify-center items-center h-screen">
      <div className="w-[100%] bg-black/40 absolute h-screen">
        <img
          className="w-full h-full object-cover mix-blend-overlay"
          src={bg_image}
          alt="loginbg"
        />
      </div>
      <form
        onSubmit={handleSubmit}
        className="text-white relative flex flex-col justify-center"
      >
        <div className="flex justify-center">
          <h1 className="text-3xl">LOGIN</h1>
        </div>

        <input
          className="mt-10 rounded-[10px] p-[12px] focus:outline-blue-600 text-black"
          type="email"
          id="email"
          onChange={handleChange}
          placeholder="email"
        />
        <input
          className="mt-10 rounded-[10px] p-[12px] focus:outline-blue-600 text-black"
          type="password"
          id="password"
          onChange={handleChange}
          placeholder="password"
        />
        <button
          type="submit"
          className="mt-10  p-3 text-white rounded-[10px] btn btn-primary"
        >
          LOGIN
        </button>
        <Link
          to="/signup"
          className="mt-3 text-center font-bold underline text-blue-500"
        >
          Register Instead
        </Link>
      </form>
    </div>
  );
}
