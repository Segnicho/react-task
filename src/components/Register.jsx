import bg_image from "../assets/bg-img.jpeg";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { clientInstance } from "../utils/axios";

import { useAuth } from "../hooks/useAuth";
import { toast } from "react-toastify";


const Register = () => {
  const [user, setUser] = useState({ firstname: "", email: "", password: "" });

  const { register } = useAuth();
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    try {
      await register({
        firstname: user.firstname,
        email: user.email,
        password: user.password,
      });
      toast.success("Registration successful!");
      navigate("/login");
    } catch (err) {
      toast.error("OOPS! Something went wrong");
    }
    finally{
      setUser({
        firstname: "",
        email: "",
        password: ""
      })
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
          <h1 className="text-3xl">Register</h1>
        </div>
        <input
          className="mt-10 p-[12px] rounded-[10px]  focus:outline-blue-600 text-black"
          type="text"
          id="firstname"
          onChange={handleChange}
          placeholder="first name"
        />
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
          Register
        </button>
        <Link
          to="/login"
          className="mt-3 text-center font-bold underline text-blue-500"
        >
          Login Instead
        </Link>
      </form>
    </div>
  );
};

export default Register;
