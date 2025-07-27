export default function AddItem() {
    return(
        <div style={{display: "flex", alignItems: "center", gap: "0.5em", padding: "0 1em"}}>
            <input type="text" style={{height: "80%"}} required/>
            <button>Add Task</button>
        </div>
    );
};