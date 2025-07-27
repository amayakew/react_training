export default function ToDoItem({task, onToggle}) {
    return(
        <label>
            <input type="checkbox" checked={task.isDone} onChange={onToggle}/>
            {task.label}
        </label>
    );
};