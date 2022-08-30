import { createSlice } from "@reduxjs/toolkit";

import { fetchTodos, updateTodo, deleteTodo, addTodo } from "./fetch";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
    status: "idle",
    error: null,
    localUserName: "",
  },
  reducers: {
    setLocalStorage: (state, action) => {
      state.localUserName = action.payload;
    },
  },
  extraReducers: {
    [fetchTodos.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchTodos.fulfilled]: (state, action) => {
      state.todos = action.payload;
      state.status = "succeeded";
    },
    [fetchTodos.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
    [addTodo.pending]: (state, action) => {
      state.status = "loading";
    },
    [addTodo.fulfilled]: (state, action) => {
      state.todos.push(action.payload);
      state.status = "succeeded";
    },
    [addTodo.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
    [updateTodo.pending]: (state, action) => {
      state.status = "loading";
    },
    [updateTodo.fulfilled]: (state, action) => {
      const index = state.todos.findIndex(
        (todo) => todo.id === action.payload.id
      );
      state.todos[index] = action.payload;
    },
    [updateTodo.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
    [deleteTodo.pending]: (state, action) => {
      state.status = "loading";
    },
    [deleteTodo.fulfilled]: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    [deleteTodo.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export const { setLocalStorage } = todoSlice.actions;
export default todoSlice.reducer;
