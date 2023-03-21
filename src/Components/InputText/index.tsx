import React, { useState } from "react";
import { Button } from "../Button";

interface InputTextProps {
  label: string;
  size?: string;
  placeholder?: string;
  name: string;
  disabled?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string | number;
}

export const InputText: React.FC<InputTextProps> = ({
  label,
  size,
  placeholder,
  name,
  disabled,
  onChange,
  value,
}) => {
  return (
    <div className={`d-flex flex-direction-column w-100`}>
      <label
        title={label}
        className={`text-input-label ${disabled && "disabled-label"}`}
      >
        {label}
      </label>
      <input
        name={name}
        placeholder={placeholder}
        className={`input-size-${size} text-input ${
          disabled && "disabled-input"
        }`}
        type="text"
        onChange={onChange}
        value={value}
        disabled={disabled}
      />
    </div>
  );
};
