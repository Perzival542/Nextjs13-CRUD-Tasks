"use client"
import { createContext, useContext} from "react";
import {v4 as uuid} from "uuid";
import { useLocalStorage } from "@/hooks/useLocalStorage";

export const TaskContext = createContext();

export const useTasks = () => {
    const context = useContext(TaskContext);
    if(!context) throw new Error('useTasks must use within a provider');
    return context;
};

export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useLocalStorage('tasks', [])


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