import TodoCard from "./todo-card";

const TodoList = ({todoList, deleteTodo}) => {
  return (
    <div className="flex">
      <ul className="w-1/3 min-w-80 m-auto mt-10">
        {todoList.map((todo) => {
          return (
            <li key={todo.id}>
              <TodoCard todo={todo} handleClick={() => deleteTodo(todo.id)} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
