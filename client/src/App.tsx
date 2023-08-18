import { createContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HomePage from "./component/HomePage";
import Resgister from "./component/Resgister";

function App() {
  return (
    <>
      {/* <HomePage /> */}
      <Resgister />
    </>
  );
}

export default App;
