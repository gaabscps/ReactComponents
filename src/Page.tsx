import React from "react";
import { Sidebar } from "./Components/Sidebar";
import { MainPage } from "./Pages/MainPage";
import "./styles/import.scss";

export const Page = () => {
  return (
    <div className="d-flex">
      <Sidebar />
      <MainPage />
    </div>
  );
};

export default Page;
