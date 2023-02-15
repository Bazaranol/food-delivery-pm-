import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Layout } from "./components/templates/Layout";
import { Buttons } from "./components/atoms/button/Buttons";
import { Route, Routes } from "react-router-dom";
import { SCREENS } from "./routes/endpoints";
import { Registation } from "./components/pages/Registation";
import { Login } from "./components/pages/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path={SCREENS.SCREEN_LAYOUT} element={<Layout />}>
          <Route index element={<Login />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
