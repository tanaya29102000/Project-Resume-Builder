import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Signup from "./Components/Signup";

function App() {
  const location = useLocation(); // Get the current route path

  return (
    <>
      {/* Conditionally render Header based on the route */}
      {location.pathname !== "/login" && <Header />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
