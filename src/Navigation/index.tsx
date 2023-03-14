import React from "react";
import { Route, Routes } from "react-router-dom";
import { MainPage } from "../Pages/MainPage/Page";
import { AboutPage } from "../Pages/About";
import { TablePage } from "../Pages/Components/TablesPage";
import { BasicComponentsPage } from "../Pages/Components/BasicComponentsPage";

export const Navigation = () => {
  return (
    <div className="w-100vw">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact/collapsetable" element={<TablePage />} />
        <Route
          path="/contact/basic-components"
          element={<BasicComponentsPage />}
        />
      </Routes>
    </div>
  );
};
