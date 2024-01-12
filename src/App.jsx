import Navbar from "./component/navbar/navbar";
import CreateTodo from "./component/new-todo/create-todo";
import TodoList from "./component/todo/todoList";
import { useState } from "react";

function App() {
  const [id, setId] = useState(4);
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      description: "React + Tailwind",
    },
    {
      id: 2,
      description: "MUI",
    },
    {
      id: 3,
      description: "RadixUI",
    },
    {
      id: 4,
      description: "NextJs",
    },
  ]);

  const deleteTodo = (id) => {
    const updatedTodoList = todoList.filter(todo => todo.id !== id);
    setTodoList(updatedTodoList);
  }

  const addTodo = (todo) => {
    const newId = id + 1;
    const updatedTodoList = [...todoList, {
      id: newId,
      description: todo
    }];

    setId(newId);
    setTodoList(updatedTodoList);
  }

  return (
    <div className="w-screen min-h-screen max-h-full bg-sky-900">
      <Navbar />
      <TodoList todoList={todoList} deleteTodo={deleteTodo} />
      <CreateTodo addTodo={addTodo} />
    </div>
  );
}

export default App;
