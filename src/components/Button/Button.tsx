import React from 'react';
import { Link } from "react-router-dom";

type buttonType = "submit" | "reset" | "button";

interface IButtonProps {
    type: buttonType,
    children: React.ReactNode,
    route: string,
    onClick?: () => void,
}

const Button = (props: IButtonProps) => {
    return (
        <Link to={props.route}>
            <button type={props.type} onClick={props.onClick}>{props.children}</button>
        </Link>
    )
}

export default Button;