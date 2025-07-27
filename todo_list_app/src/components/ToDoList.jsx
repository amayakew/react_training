import ToDoItem from "./ToDoItem";

export default function ToDoList({tasks, onToggle}) {
    return(
        <>
            <h1>ToDo List</h1>
            <p>You have <span style={{fontWeight: "bold"}}>{tasks.length}</span> tasks:</p>
            <ul>
                {tasks.map((task, i) => <li key={i}><ToDoItem task={task} onToggle={() => onToggle(i)}/></li>)}
            </ul>
        </>
    );
};