import React from "react";
import { Link } from "react-router-dom";
import { ButtonType } from "../../utils/types";

type ButtonProps = {
  className?: string;
  type: ButtonType;
  children: React.ReactNode;
  route?: string;
  onClick?: () => void;
};

const Button = (props: ButtonProps) => {
  return (
    <Link to={props.route!}>
      <button
        className={props.className}
        type={props.type}
        onClick={props.onClick}
      >
        {props.children}
      </button>
    </Link>
  );
};

export default Button;
