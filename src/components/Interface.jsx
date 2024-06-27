import { useSelector } from "react-redux";
import Todo from "./Todo";
import { selectTodos } from "../features/todos/todosSlice";

const Interface = () => {
  const todos = useSelector(selectTodos);

  if (!todos) {
    return <p>Loading...</p>;
  }

  return todos.map((todo) => {
    return (
      <div className={todo.completed ? "completed" : "notCompleted"}>
        <Todo id={todo.id} title={todo.title} />
      </div>
    );
  });
};

export default Interface;
