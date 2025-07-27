import { useState } from "react";

export default function AddItem({onAddTaskToList}) {
    const [task, setTask] = useState("");

    const handleClick = () => {
        onAddTaskToList(task);
        setTask("");
    };

    return(
        <div style={{display: "flex", alignItems: "center", gap: "0.5em", padding: "0 1em"}}>
            <input type="text" style={{height: "80%"}} value={task} onChange={(e)=> setTask(e.target.value)}/>
            <button onClick={handleClick}>Add Task</button>
        </div>
    );
};