import React, { useState, useEffect } from "react";
import "../Components/Todo.scss";

import { toast } from "react-hot-toast";
import deletedbtn from "../delete.png";
import check from "../check.png";

const Todos = () => {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (newTask.trim() !== "") {
      const newTaskdata = {
        text: newTask,
        completed: false,
      };
      setTasks((prev) => [...prev, newTaskdata]);
      setNewTask("");
      toast.success("Task added successfully");
    }
  };

  const markTaskCompleted = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = true;
    setTasks(updatedTasks);
    toast.success("Task marked as completed");
  };

  const markTaskPending = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = false;
    setTasks(updatedTasks);
    toast.success("Task marked as pending");
  };

  const removeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
    toast.error("Task deleted");
  };

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;

  return (
    <>
      <div className="main-container-todo">
        <div className="todo-container">
          <h2 className="todo">
            Todo List{" "}
            <span>
              <img src={check} alt="" />
            </span>
          </h2>
          <div className="data">
            {totalTasks === 0 ? (
              <p>No tasks added yet!</p>
            ) : (
              <>
                <p className="task-count">
                  <span>Total tasks:</span> {totalTasks}
                </p>
                <p className="completed-count">
                  <span>Completed tasks:</span> {completedTasks}
                </p>
              </>
            )}
          </div>

          <div className="input-container">
            <input
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              placeholder="Add a new task"
              className="task-input"
            />
            <button onClick={addTask} className="add-button">
              Add Task
            </button>
          </div>
        </div>

        {totalTasks === 0 ? (
          <p className="no-tasks-message">No tasks added yet!</p>
        ) : (
          <ul className="task-list">
            {tasks.map((task, index) => (
              <li key={index}>
                <div className="task-list-data">
                  <h3>Name:</h3>
                  <h3 className="task-text">{task.text}</h3>
                </div>
                <div className="button-container">
                  <h3>Status:</h3>
                  {!task.completed ? (
                    <button
                      className="toggle pending"
                      onClick={() => markTaskCompleted(index)}
                    >
                      Pending
                    </button>
                  ) : (
                    <button
                      className="toggle completed"
                      onClick={() => markTaskPending(index)}
                    >
                      Completed
                    </button>
                  )}
                  <button className="remove" onClick={() => removeTask(index)}>
                    <img src={deletedbtn} alt="" />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default Todos;
