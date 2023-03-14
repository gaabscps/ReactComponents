import React from "react";
import { CollapseTable } from "../../../Components/CollapseTable";

export const TablePage: React.FC = () => {
  return (
    <div className="mainPageStyle">
      <h1>Tabelas</h1>
      <h4 className="mb-30">Tabela Colapse</h4>
      <CollapseTable />
    </div>
  );
};
