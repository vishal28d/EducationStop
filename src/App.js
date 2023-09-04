import React from "react";
import image1 from "../src/code.jpg";
import image2 from "../src/physicsimage.jpg";
import image3 from "../src/phy.jpg";
import image4 from "../src/python.jpg";
import Navbar from "./Navbar";
import { Route, Router, Routes } from "react-router-dom";
import SignIn from "./SignIn";
import Myhome from "./home";
import Payment from "./Payment";



function App() {
  return (
    <>

      <Routes>
        <Route path="/" element={<Myhome/>}></Route>
        <Route path="/sign-in" element={<SignIn />}></Route>
        <Route path="/payment" element={<Payment />}></Route>
      </Routes>


      
    </>
  );
}

export default App;
