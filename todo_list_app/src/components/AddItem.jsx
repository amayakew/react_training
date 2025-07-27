import { useState } from "react";

const initialTask = {label: "", isDone: false};

export default function AddItem({onAddTaskToList}) {
    const [task, setTask] = useState(initialTask);

    const handleClick = () => {
        onAddTaskToList(task);
        setTask(initialTask);
    };

    return(
        <div style={{display: "flex", alignItems: "center", gap: "0.5em", padding: "0 1em"}}>
            <input 
                type="text" 
                style={{height: "80%"}} 
                value={task.label} 
                onChange={(e)=> setTask((currentTask)=>({
                    ...currentTask, 
                    label: e.target.value
                }))}/>
            <button onClick={handleClick} disabled={task.label === ""}>Add Task</button>
        </div>
    );
};