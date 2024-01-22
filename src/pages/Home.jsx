/* eslint-disable react-hooks/exhaustive-deps */
import CreateTodo from "../component/new-todo/create-todo";
import TodoList from "../component/todo/todoList";
import { useState, useRef } from "react";

function Home() {
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

  const todoListEndRef = useRef();

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

    setTimeout(() => {
      todoListEndRef.current.scrollIntoView({ behavior: "smooth" });
    }, 100)
  }

  return (
    <div className="overflow-hidden bg-gray-950">
      <TodoList ref={todoListEndRef} todoList={todoList} deleteTodo={deleteTodo} />
      <CreateTodo addTodo={addTodo} />
    </div>
  );
}

export default Home;