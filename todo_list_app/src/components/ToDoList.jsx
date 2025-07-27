import ToDoItem from "./ToDoItem";

export default function ToDoList({tasks}) {
    return(
        <>
            <h1>ToDo List</h1>
            <p>You have <span style={{fontWeight: "bold"}}>{tasks.length}</span> tasks:</p>
            <ul>
                {tasks.map(task => <li key={task}><ToDoItem taskName={task}/></li>)}
            </ul>
        </>
    );
};