import { useState } from "react";
import ToDoItem from "./ToDoItem";
import ToDoListNavigation from "./ToDoListNavigation";

export default function ToDoList({tasks, onToggle}) {
    const [currentPage, setCurrentPage] = useState(1);

    const tasksPerPage = 5;
    const totalPages = Math.ceil(tasks.length / tasksPerPage);

    const firstIndexOnPage = (currentPage - 1) * tasksPerPage;

    const tasksToDraw = tasks.slice(firstIndexOnPage, firstIndexOnPage + tasksPerPage);

    const handleNextClick = () => {
        setCurrentPage(current => current + 1);
    }

    const handlePrevClick = () => {
        setCurrentPage(current => current - 1);
    }

    return(
        <>
            <h1>ToDo List</h1>
            <p>You have <span style={{fontWeight: "bold"}}>{tasks.length}</span> tasks:</p>
            <ul>
                {tasksToDraw.map((task, i) => <li key={i}><ToDoItem task={task} onToggle={() => onToggle(i)}/></li>)}
            </ul>
            {totalPages > 1 && <ToDoListNavigation totalPages={totalPages} currentPage={currentPage} toNextPage={handleNextClick} toPrevPage={handlePrevClick}/>}
        </>
    );
};