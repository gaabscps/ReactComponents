import React from "react";

interface ButtonProps {
  theme?: "outline-dark";
  size?: "small" | "medium" | "large" | string;
}

export const Buttom: React.FC<ButtonProps> = ({ theme, size }) => {
  return (
    <div
      onClick={() => alert("Coloque aqui a ação do botão")}
      className={`buttonContainer ${theme} btn-${size}`}
    >
      <span>Botão</span>
    </div>
  );
};
