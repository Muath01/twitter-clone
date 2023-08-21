import { createContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HomePage from "./component/HomePage";
import Resgister from "./component/Register";
import { Route, Routes } from "react-router-dom";
import Auth from "./component/Auth";

function App() {
  return (
    <>
      {/* <HomePage /> */}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/register" element={<Resgister />} />
      </Routes>
    </>
  );
}

export default App;
