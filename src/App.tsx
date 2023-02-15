import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Layout } from "./components/templates/Layout";
import { Route, Routes } from "react-router-dom";
import { SCREENS } from "./routes/endpoints";
import { Registation } from "./components/pages/Registation";
import { Login } from "./components/pages/Login";
import { Dishes } from "./components/pages/Dishes";

function App() {
  return (
    <>
      <Routes>
        <Route path={SCREENS.SCREEN_LAYOUT} element={<Layout />}>
          <Route index element={<Dishes />}></Route>
          <Route path={SCREENS.SCREEN_AUTH} element={<Login />}></Route>
          <Route
            path={SCREENS.SCREEN_REGISTR}
            element={<Registation />}
          ></Route>
          <Route path={SCREENS.SCREEN_UNKNOWN} element={<Dishes />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
