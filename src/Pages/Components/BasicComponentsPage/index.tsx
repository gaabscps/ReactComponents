import React, { useState } from "react";
import { Buttom } from "../../../Components/Buttom";

export const BasicComponentsPage: React.FC = () => {
  const [size, setSize] = useState<string>();

  return (
    <>
      <div className="mainPageStyle">
        <h1>Componentes Basicos</h1>
        <h4>Botões</h4>
        <div className="mb-30" style={{ width: "fit-content" }}>
          <div className="d-flex mb-30">
            <div className="mr-30 d-flex flex-direction-column align-items-center">
              <span className="mb-10">Botão basico</span>
              <Buttom size={size} />
            </div>
            <div className="mr-30 d-flex flex-direction-column align-items-center">
              <span className="mb-10">Botão com tema outline</span>
              <Buttom size={size} theme="outline-dark" />
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <span onClick={() => setSize("small")} className="action-icon">
              Small
            </span>
            <span onClick={() => setSize("")} className="action-icon">
              Standard
            </span>
            <span onClick={() => setSize("medium")} className="action-icon">
              Medium
            </span>
            <span onClick={() => setSize("large")} className="action-icon">
              Large
            </span>
          </div>
        </div>
        <hr />
      </div>
    </>
  );
};
