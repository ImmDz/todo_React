import { FC } from "react";

interface LoginProps {
    onClick: () => void;
}

export const Login: FC<LoginProps> = ({onClick}) => {
    return (
        <button onClick={onClick}>Login</button>
    )
}