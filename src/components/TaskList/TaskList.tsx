import { FC } from "react";
import { Link } from "react-router-dom";

interface TasksState {
    id: number;
    label: string;
}

interface asfj {
    task: TasksState[];
}

export const TaskList: FC<asfj> = ({ task }) => {

    return (
        <ul>
            {task.map((item) => <li key={item.id}><Link to={`task/${item.id}`}>{item.label}</Link></li>)}
        </ul>
    )
}