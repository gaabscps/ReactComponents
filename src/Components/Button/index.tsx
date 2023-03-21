import React from "react";

interface ButtonProps {
  className?: string;
  theme?: "outline-dark";
  size?: "small" | "medium" | "large" | string;
  title: string;
  disabled?: boolean;
  onClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  className,
  theme,
  size,
  title,
  disabled,
  onClick,
}) => {
  return (
    <div
      onClick={disabled ? undefined : onClick}
      className={`buttonContainer ${theme} btn-${size} ${className} ${
        disabled && "btn-disabled"
      }`}
    >
      <span>{title}</span>
    </div>
  );
};
