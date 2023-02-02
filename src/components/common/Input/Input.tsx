import { FC, ChangeEvent } from "react";

interface InputProps {
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>, value: string) => void;
}

export const Input: FC<InputProps> = ({ value, onChange }) => {
    return <input type="text" value={value} onChange={(e) => onChange(e, value)} />
}