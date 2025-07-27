import ToDoItem from "./ToDoItem";

export default function ToDoList() {
    return(
        <>
            <h1>ToDo List</h1>
            <p>You have <span>number</span> tasks:</p>
            <ul><ToDoItem/></ul>
        </>
    );
};