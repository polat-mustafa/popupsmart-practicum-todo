import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API = "https://630dba6bb37c364eb70a0cc5.mockapi.io/todos";

export const fetchTodos = createAsyncThunk("todo/fetchTodos", async () => {
  const response = await axios.get(API);
  return response.data;
});

export const addTodo = createAsyncThunk("todo/addTodo", async (todo) => {
  const response = await axios.post(API, todo);
  return response.data;
});

export const updateTodo = createAsyncThunk("todo/updateTodo", async (todo) => {
  const response = await axios.put(`${API}/${todo.id}`, todo);
  return response.data;
});

export const deleteTodo = createAsyncThunk("todo/deleteTodo", async (id) => {
  await axios.delete(`${API}/${id}`);
  return id;
});
