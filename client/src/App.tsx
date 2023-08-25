import { createContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HomePage from "./component/HomePage";
import Resgister from "./component/Register";
import { Route, Routes } from "react-router-dom";
import Auth from "./component/Auth";
import PostsSections from "./component/PostsSections";
import { useSelector } from "react-redux";
import { RootState } from "./Redux/store";
import Settings from "./component/Settings";

function App() {
  const postsRedux = useSelector((state: RootState) => state.postsRedux);
  const user = useSelector((state: RootState) => state.setSigned);
  return (
    <>
      {/* <HomePage /> */}

      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              middleComponent={
                <PostsSections user={user} postsRedux={postsRedux} />
              }
            />
          }
        />
        <Route path="/auth" element={<Auth />} />
        <Route path="/register" element={<Resgister />} />
        <Route
          path="/settings"
          element={<HomePage middleComponent={<Settings />} />}
        />
      </Routes>
    </>
  );
}

export default App;
