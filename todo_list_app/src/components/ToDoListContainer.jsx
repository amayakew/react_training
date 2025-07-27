import { useState } from "react";
import AddItem from "./AddItem";
import ToDoList from "./ToDoList";

export default function ToDoListContainer(){

    const [tasksList, setTaskList] = useState([]);

    const handleAddTask = (task) => {
        setTaskList((currentList) => [...currentList, task]);
    };

    const handleToggle = (index) => {
        setTaskList(tasksList.map((task, i) => i === index ? {...task, isDone: !task.isDone} : task));
    };

    return(
        <main>
            <AddItem onAddTaskToList={(task)=>handleAddTask(task)}/>
            <ToDoList tasks={tasksList} onToggle={(index) => handleToggle(index)}/>
        </main>
    );
};