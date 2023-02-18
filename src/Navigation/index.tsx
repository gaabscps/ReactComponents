import React from "react";
import { Route, Routes } from "react-router-dom";
import { MainPage } from "../Pages/MainPage/Page";
import { About } from "../Pages/About";

export const Navigation = () => {
  return (
    <div className="w-100vw">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};
