import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./landing/Home";
import SignUp from "./auth/SignUp";
import Login from "./auth/Login";
import Buses from "./buses/Buses";
import Bus from "./buses/Bus";

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/login' element={<Login />} />
      <Route path='/destinations/:id/buses' element={<Buses />} />
      <Route path="/buses/:id" element={<Bus />} />
    </Routes>
  )
};

export default App;  