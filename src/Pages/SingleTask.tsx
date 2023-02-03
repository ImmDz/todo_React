import { FC, useState } from "react";
import { useParams, Navigate } from "react-router-dom";

interface Task {
    id: number;
    label: string;
}

export const SingleTask: FC = () => {
    const [tasks, setTasks] = useState<Task[]>(JSON.parse(localStorage.getItem("tasks") ?? '[]'));
    const { id } = useParams();
    const task = tasks.find((task) => task.id === Number(id));
    return (
        <p>{task?.label ?? <Navigate to="/"/>}</p>
    )
}