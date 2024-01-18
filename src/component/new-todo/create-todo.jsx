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
        className="w-1/3 pl-4 mt-2 text-gray-200 bg-gray-800 rounded-md outline-none opacity-75 min-w-80 h-9"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default CreateTodo;