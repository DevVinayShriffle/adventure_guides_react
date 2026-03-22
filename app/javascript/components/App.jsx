import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./landing/Home";
import SignUp from "./auth/SignUp";
import Login from "./auth/Login";

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/login' element={<Login />} />
    </Routes>
  )
};

export default App;  