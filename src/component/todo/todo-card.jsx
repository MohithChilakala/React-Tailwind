import del from '../../assets/remove.svg'

const TodoCard = ({todo, handleClick}) => {
  return (
   <div className="flex justify-between p-3 text-gray-300 bg-gray-700 border border-gray-900">
    <div>{todo.description}</div>
    <img 
      style={{userSelect: 'none'}} 
      className="w-[18px] h-[18px] cursor-pointer invert opacity-80" src={del} alt="delete" 
      onClick={handleClick}
    />
   </div>
  );
};

export default TodoCard;