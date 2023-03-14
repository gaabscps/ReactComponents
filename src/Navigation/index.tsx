import React from "react";
import { Route, Routes } from "react-router-dom";
import { MainPage } from "../Pages/MainPage/Page";
import { AboutPage } from "../Pages/About";
import { CollapseTablePage } from "../Pages/Components/CollapseTablePage";

export const Navigation = () => {
  return (
    <div className="w-100vw">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact/collapsetable" element={<CollapseTablePage />} />
      </Routes>
    </div>
  );
};
