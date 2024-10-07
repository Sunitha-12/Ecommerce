import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Register from "./Pages/Registration";
import Final from "./Components/Final";
import Login from "./Pages/Login";
export default function App(){
  return(
  <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Final/>}></Route>
      <Route path="/reg" element={<Register/>}></Route>
      <Route path="/log" element={<Login/>}></Route>
    </Routes>
    </BrowserRouter>
  </>
  )
}

