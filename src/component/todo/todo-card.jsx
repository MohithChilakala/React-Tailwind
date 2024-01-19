import del from '../../assets/remove.svg'

const TodoCard = ({todo, handleClick}) => {
  const handleTodoClick = () => {
    const todoElement = document.getElementById(todo.id);
    todoElement.classList.add("fade-right");

    setTimeout(() => {
      todoElement.classList.add("close-up");
      setTimeout(() => handleClick(), 200);
    }, 300);
  }
  
  return (
   <div id={todo.id} className="flex justify-between p-3 overflow-hidden text-gray-300 bg-gray-700 border border-gray-900">
    <div>{todo.description}</div>
    <img 
      className="w-[18px] h-[18px] cursor-pointer invert opacity-80" src={del} alt="delete" 
      onClick={handleTodoClick}
    />
   </div>
  );
};

export default TodoCard;