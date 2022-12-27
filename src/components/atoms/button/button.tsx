import { FC } from "react";
import "./button.scss";

interface ButtonProps {
  children: React.ReactNode;
  text: string;
}

const Button: FC<ButtonProps> = ({ children, text = "Agregar" }) => {
  return (
    <button className="button">
      <label>{children}</label>
      {text}
    </button>
  );
};

export default Button;
