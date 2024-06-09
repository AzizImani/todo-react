import React, { useEffect, useState } from "react";
import axios from "axios";
import Todo from "./Todo";

import { TodoProps } from "./TodoProps";

function Todos() {
  const [todos, setTodos] = useState<TodoProps[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/todos")
      .then((response) => {
        setTodos(response.data);
      })
      .catch((error) => {});
  }, []);

  const handleTodoRemove = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleTodoInsert = (id: number) => {
    axios
      .get("http://localhost:8080/todos")
      .then((response) => {
        setTodos(response.data);
      })
      .catch((error) => {});
  };

  return (
    <div className="row mx-1 px-5 pb-3 w-80">
      <div id="todos-container" className="col mx-auto">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
            dueDate={todo.dueDate}
            onRemove={handleTodoRemove}
          />
        ))}
      </div>
    </div>
  );
}

export default Todos;
