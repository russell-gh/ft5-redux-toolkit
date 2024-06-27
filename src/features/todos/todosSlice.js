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
  },
});

export const { storeApiData, toggleCompleted, deleteTodo } = todosSlice.actions;

export const selectTodos = (state) => state.todos.todos;

export default todosSlice.reducer;
