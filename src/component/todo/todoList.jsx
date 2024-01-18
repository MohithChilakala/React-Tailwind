import TodoCard from "./todo-card";

const TodoList = ({ todoList, deleteTodo }) => {
  return (
    <div>
      <h2 className="text-4xl font-semibold text-center text-white pt-7">
        Your Todo's
      </h2>
      <div className="flex">
        <ul className="w-1/3 m-auto mt-10 min-w-80">
          {todoList.map((todo) => {
            return (
              <li key={todo.id}>
                <TodoCard todo={todo} handleClick={() => deleteTodo(todo.id)} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
