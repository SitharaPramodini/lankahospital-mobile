import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import Header from "./components/Header";

function App() {

  return (
    <BrowserRouter>
      {/* <BottomMenu /> */}
      <Routes>
        <Route path="/:id" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
