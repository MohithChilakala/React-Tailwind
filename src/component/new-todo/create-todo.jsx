import { useState } from "react";

const CreateTodo = ({addTodo}) => {
  const [todo, setTodo] = useState("");

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleKeyDown = (e) => {
    if(e.keyCode === 13) {
      addTodo(todo);
      setTodo("");
    }
  }

  return (
    <div className="flex flex-col items-center">
      <h2 className="mt-5 font-semibold text-gray-200">Add new todo</h2>
      <input 
        type={"text"}
        value={todo}
        className="w-1/3 min-w-96 h-9 mt-2 pl-4 text-gray-200 outline-none bg-gray-800 opacity-75 rounded-md"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default CreateTodo;