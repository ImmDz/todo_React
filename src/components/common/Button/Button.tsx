import { FC, PropsWithChildren } from "react";

interface ButtonProps {
    onClick: () => void;
}

export const Button: FC<PropsWithChildren<ButtonProps>> = ({ onClick, children }) => {
    return <button onClick={onClick}>{children}</button>
}