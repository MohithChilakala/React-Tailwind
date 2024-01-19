import { forwardRef } from "react";
import TodoCard from "./todo-card";

const TodoList = forwardRef(({ todoList, deleteTodo }, ref) => {  
  return (
    <div className="overflow-y-auto max-h-[70vh]">
      <h2 className="text-4xl font-semibold text-center pt-7">
        Your Todo's
      </h2>
      <div className="flex">
        <ul className="w-1/3 m-auto mt-10 overflow-hidden min-w-80">
          {todoList.map((todo) => {
            return (
              <li key={todo.id}>
                <TodoCard todo={todo} handleClick={() => deleteTodo(todo.id)} />
              </li>
            );
          })}
        </ul>
      </div>
      <span ref={ref}></span>
    </div>
  );
});

export default TodoList;
