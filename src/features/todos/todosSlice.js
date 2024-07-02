import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./todosInitialState";

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    storeApiData: (state, { payload }) => {
      state.todos = payload;
      state.lastIssuedId = state.todos.length + 1;
    },
    toggleCompleted: (state, { payload }) => {
      const indexOf = state.todos.findIndex((todo) => {
        return todo.id === payload;
      });
      state.todos[indexOf].completed = !state.todos[indexOf].completed;
    },
    deleteTodo: (state, { payload }) => {
      const indexOf = state.todos.findIndex((todo) => {
        return todo.id === payload;
      });
      state.todos.splice(indexOf, 1);
    },
    setNewTodo: (state, { payload }) => {
      state.todos.text = payload;
    },
    addTodo: (state) => {
      state.todos.lastIssueId = state.todos.lastIssueId + 1;

      state.todos.push({
        userId: 1,
        title: state.text,
        completed: false,
        id: state.todos.lastIssueId,
      });
    },
    setMessage: (state, { payload }) => {
      state.message = payload;
    },
  },
});

export const { storeApiData, toggleCompleted, deleteTodo, setMessage } =
  todosSlice.actions;

export const selectTodos = (state) => state.todos.todos;
export const selectMessage = (state) => state.todos.message;

export default todosSlice.reducer;
