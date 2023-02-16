import React from "react";
import { CollapseTable } from "../../Components/CollapseTable";

export const MainPage = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "#F8F8F8",
          height: "100vh",
          padding: "40px",
          width: "100%",
        }}
      >
        <div>
          <CollapseTable />
        </div>
      </div>
    </>
  );
};
