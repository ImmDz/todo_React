import { FC, useState, useEffect } from "react";
import { Input, Button } from "../components/common";
import { List } from "../components/List/List";

interface Tasks {
    id: number;
    label: string;
}

export const MainPage: FC = () => {
    const [inputValue, setInputValue] = useState("");
    const [tasks, setTasks] = useState<Tasks[]>(JSON.parse(localStorage.getItem("tasks") ?? '[]'));

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    const addItem = (newTask: string) => {
        setTasks((prevTasks) => inputValue.trim().length ? [...prevTasks, { label: newTask, id: Math.floor(Math.random() * 100) }] : prevTasks);
        setInputValue('');
    }
    const deleteItem = (id: number) => {
        const newTasks = tasks.filter((task) => task.id !== id);
        setTasks(newTasks);
    }

    return (
        <div className="App">
            <Input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <Button onClick={() => addItem(inputValue)}>Add</Button>
            <List listItem={tasks} onClick={deleteItem} />
        </div>
    );
}