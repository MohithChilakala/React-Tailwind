import del from '../../assets/remove.svg'

const TodoCard = ({todo, handleClick}) => {
  return (
   <div className="text-gray-300 flex justify-between border bg-indigo-900 bg-opacity-50 border-indigo-900 p-3">
    <div>{todo.description}</div>
    <img 
      style={{userSelect: 'none'}} 
      width={"18px"} 
      height={"18px"} 
      className='cursor-pointer invert opacity-80' src={del} alt="delete" 
      onClick={handleClick}
    />
   </div>
  );
};

export default TodoCard;