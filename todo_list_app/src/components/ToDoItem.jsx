export default function ToDoItem({taskName}) {
    return(
        <label>
            <input type="checkbox"/>
            {taskName}
        </label>
    );
};