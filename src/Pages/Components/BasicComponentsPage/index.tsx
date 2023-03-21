import React, { useState } from "react";
import { Button } from "../../../Components/Button";
import { InputText } from "../../../Components/InputText";

export const BasicComponentsPage: React.FC = () => {
  const [size, setSize] = useState<string>();
  const [disabled, setDisabled] = useState<boolean>(false);

  const [value, setValue] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <>
      <div className="mainPageStyle">
        <h1>Componentes Basicos</h1>
        <h4>Botões</h4>
        <div className="mb-30" style={{ width: "fit-content" }}>
          <div className="d-flex mb-30">
            <div className="mr-30 d-flex flex-direction-column align-items-center">
              <span className="mb-10 text-center">Botão basico</span>
              <Button
                size={size}
                onClick={() => console.log("clicou")}
                title="Button"
              />
            </div>
            <div className="mr-30 d-flex flex-direction-column align-items-center">
              <span className="mb-10 text-center">Botão com tema outline</span>
              <Button
                size={size}
                theme="outline-dark"
                onClick={() => console.log("clicou")}
                title="Button"
              />
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
        <div style={{ width: "980px", padding: "15px 0" }}>
          <div
            className="mb-30 d-flex align-items-center"
            style={{ width: "100%" }}
          >
            <InputText
              name="inputText"
              placeholder="Placeholder here"
              label="Input Text"
              disabled={disabled}
              onChange={(e) => onChange(e)}
              value={value}
            />
            <div className="d-flex align-items-center ml-30">
              <Button
                className="width-50px"
                onClick={() =>
                  value ? alert(value) : alert("Type something to show here")
                }
                title="Test"
                disabled={disabled}
              />
            </div>
          </div>
          <div className="mb-20">
            <span>Disabled</span>
          </div>
          <Button
            onClick={() => setDisabled(!disabled)}
            title={String(!disabled)}
            theme="outline-dark"
            size="small"
          />
        </div>
      </div>
    </>
  );
};
