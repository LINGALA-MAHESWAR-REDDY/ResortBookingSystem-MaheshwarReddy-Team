import React from 'react'
import { BrowserRouter,Routes, Route  } from 'react-router-dom';
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";
import Login from "./components/Login";

import Navbar from "./components/Navbar";

// import { } from "react-router-dom";
import Signup from "./components/Signup";

function Path() {
  return (
    <div>
      <Navbar />
      {/* <BrowserRouter> */}
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/rooms/" element={<Rooms/>} />
        <Route exact path="/rooms/:slug" component={<SingleRoom/>} />
        <Route component={Error} /><Route/>
        <Route path="/Login/"element={<Login/>}></Route>
        <Route path="/Signup/"element={<Signup/>}></Route>
      </Routes>
    {/* </BrowserRouter> */}
    </div>
  )
}

export default Path;
