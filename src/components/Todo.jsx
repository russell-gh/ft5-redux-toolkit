import {
  deleteTodo,
  toggleCompleted,
  setMessage,
} from "../features/todos/todosSlice";
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
      <button
        onClick={() => {
          dispatch(setMessage("Hello World" + id));
        }}
      >
        Send message
      </button>
    </>
  );
};

export default Todo;
