import { FC, useState } from "react";
import { useParams, Link } from "react-router-dom";

interface TasksState {
    id: number;
    label: string;
  }

export const SingleTask: FC = () => {
    const [tasks, setTasks] = useState<TasksState[]>(JSON.parse(localStorage.getItem("tasks")!));
    const { id } = useParams();
    return (
        <span>{tasks.map((item) => item.id === Number(id) ? <p key={item.id}>{item.label}</p> : undefined)}</span>
    )
}