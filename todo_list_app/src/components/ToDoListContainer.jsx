import { useEffect, useState } from "react";
import AddItem from "./AddItem";
import ToDoList from "./ToDoList";

const TODO_LIST_LOCAL_STORAGE_KEY = "todoList";

export default function ToDoListContainer() {
  const [tasksList, setTaskList] = useState([]);

  useEffect(() => {
    const dataFromLocalStorage = localStorage.getItem(
      TODO_LIST_LOCAL_STORAGE_KEY
    );

    if (dataFromLocalStorage) {
      setTaskList(JSON.parse(dataFromLocalStorage));
    }
  }, []);

  useEffect(() => {
    if (tasksList.length === 0) return;

    localStorage.setItem(
      TODO_LIST_LOCAL_STORAGE_KEY,
      JSON.stringify(tasksList)
    );
  }, [tasksList]);

  const handleAddTask = (task) => {
    setTaskList((currentList) => [...currentList, task]);
  };

  const handleToggle = (index) => {
    setTaskList(
      tasksList.map((task, i) =>
        i === index ? { ...task, isDone: !task.isDone } : task
      )
    );
  };

  return (
    <main>
      <AddItem onAddTaskToList={(task) => handleAddTask(task)} />
      <ToDoList tasks={tasksList} onToggle={(index) => handleToggle(index)} />
    </main>
  );
}
