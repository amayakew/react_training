import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

export default function ToDoListNavigation({currentPage, toNextPage, toPrevPage, totalPages}) {
    return (
        <div style={{display: "flex", alignItems: "center"}}>
            <button onClick={toPrevPage} disabled={currentPage === 1}><FaArrowLeft/></button>
            <span style={{ margin: "0 1em" }}>{currentPage}</span>
            <button onClick={toNextPage} disabled={currentPage === totalPages}><FaArrowRight/></button>
        </div>
    );
};