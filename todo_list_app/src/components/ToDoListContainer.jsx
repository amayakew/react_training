import { useState } from "react";
import AddItem from "./AddItem";
import ToDoList from "./ToDoList";

const tasksList = [];

export default function ToDoListContainer(){
    const [tasksList, setTaskList] = useState([]);

    const handleAddTask = (task) => {
        setTaskList((currentList) => ([...currentList, task]));
    };

    return(
        <main>
            <AddItem onAddTaskToList={(task)=>handleAddTask(task)}/>
            <ToDoList tasks={tasksList}/>
        </main>
    );
};