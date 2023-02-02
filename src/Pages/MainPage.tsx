import { FC, useState, useEffect } from "react";
import { Input, Button } from "../components/common";
import { TaskList } from "../components/TaskList/TaskList";

interface TasksState {
    id: number;
    label: string;
}

export const MainPage = () => {
    const [inputValue, setInputValue] = useState("");
    const [tasks, setTasks] = useState<TasksState[]>(JSON.parse(localStorage.getItem("tasks")!));
    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks])

    const addItem = (newTask: string) => {
        setTasks([...tasks, { label: newTask, id: tasks.length }]);
    }

    return (
        <div className="App">
            <Input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <Button onClick={() => addItem(inputValue)}>Add</Button>
            <Button onClick={() => console.log(tasks)}>Show tasks</Button>
            <TaskList task={tasks} />
        </div>
    );
}