import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { fetchTodos } from "./store/todo/fetch";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Body, TodoDetail } from "./pages";

import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { user } = useAuth0();

  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todo.todos);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("todos0", JSON.stringify(todos));
    localStorage.setItem("user0", JSON.stringify(user));
  }, [todos, user]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/:id" element={<TodoDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
