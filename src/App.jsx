import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import Header from "./components/Header";
import GateIn from "./components/GateIn";
import GateOut from "./components/GateOut";

function App() {

  return (
    <BrowserRouter>
      {/* <BottomMenu /> */}
      <Routes>
        <Route path="/:id/:reqid" element={<Home />} />
        <Route path="/:id/:reqid/gateout" element={<GateOut />} />
        <Route path="/:id/:reqid/gatein" element={<GateIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
