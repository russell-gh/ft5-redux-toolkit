import { deleteTodo, toggleCompleted } from "../features/todos/todosSlice";
import { useDispatch } from "react-redux";

const Todo = ({ id, title }) => {
  const dispatch = useDispatch();
  return (
    <>
      <p>{title}</p>
      <button
        onClick={() => {
          dispatch(toggleCompleted(id));
        }}
      >
        Toggle
      </button>
      <button
        onClick={() => {
          dispatch(deleteTodo(id));
        }}
      >
        Delete
      </button>
    </>
  );
};

export default Todo;
