import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import { Footer, Login, Navbar, Register } from "./components";
import { Orders, Home } from "./pages";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
        <Footer />
      </Router>{" "}
      <ToastContainer />
    </>
  );
}

export default App;
