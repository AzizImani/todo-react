import { useState } from "react";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import Todos from "./components/Todos";

function App() {
  return (
    <>
      <div className="container m-5 p-2 rounded mx-auto bg-light shadow">
        <Header />
      </div>
      <TodoForm />
      <Todos />
    </>
  );
}

export default App;
