"use client"
import { createContext, useContext, useEffect, useState } from "react";
import {v4 as uuid} from "uuid";

export const TaskContext = createContext();

export const useTasks = () => {
    const context = useContext(TaskContext);
    if(!context) throw new Error('useTasks must use within a provider');
    return context;
};

export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState(() => {
        const item = localStorage.getItem("tasks");
        const tasks = JSON.parse(item);
        if (tasks.length > 0) {
            return tasks;
        }
        return []
    })

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks])

    const createTask = (title, description) =>
        setTasks([...tasks, {
            title,
            description,
            id: uuid()
        },
        ]);

    const deleteTasks = (id) =>
        setTasks([...tasks.filter(task => task.id !== id)])

    const updateTask = (id, newData) =>
        setTasks([
            ...tasks.map((task) =>
                task.id === id ? {...task, ...newData} : task
            ),
        ]);

    return (
        <TaskContext.Provider value={{
            tasks,
            createTask,
            deleteTasks,
            updateTask
        }}
        >
            {children}
        </TaskContext.Provider>
    );
}