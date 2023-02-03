import { FC } from "react";
import { Link } from "react-router-dom";

interface ListData {
    id: number;
    label: string;
}

interface ListState {
    listItem: ListData[];
    onClick: (id: number) => void;
}

export const List: FC<ListState> = ({ listItem, onClick }) => {

    return (
        <ul>
            {listItem.map((item) =>
                <li key={item.id}>
                    <Link to={`task/${item.id}`}>{item.label}</Link>
                    <button onClick={() => onClick(item.id)}>Delete</button>
                </li>)}
        </ul>
    )
}