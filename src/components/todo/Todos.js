import React, { useEffect, useState } from "react";
import { Col, Row, Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "../../store/todo/fetch";
import { Input } from "antd";

import { useAuth0 } from "@auth0/auth0-react";

import { setLocalStorage } from "../../store/todo/todoSlice";

const Todos = () => {
  const { user, isAuthenticated } = useAuth0();

  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todo.todos);
  const localUserName = useSelector((state) => state.todo.localUserName);

  const [userTodos, setUserTodos] = useState([
    {
      content: `Hello! ${localUserName} welcome to the todo app!`,
      isCompleted: false,
      user: user ? user.email : "",
      id: 0,
    },
  ]);
  const [inputValue, setInputValue] = useState({
    content: "",
    isCompleted: false,
    user: user ? user.email : "",
    id: todos.length + 1,
  });

  const anonimTodos = todos.filter((todo) => todo.user === "");

  useEffect(() => {
    if (isAuthenticated) {
      setUserTodos(todos.filter((todo) => todo.user === user.email));
    }
  }, [todos, user, isAuthenticated]);

  useEffect(() => {
    isAuthenticated
      ? dispatch(setLocalStorage(user.name))
      : dispatch(setLocalStorage(""));
  }, [isAuthenticated, user, dispatch]);

  console.log("userName ====>", localUserName);
  console.log(anonimTodos);
  console.log(" userTodos =====> ", userTodos);
  console.log(" isAuthenticated =====> ", isAuthenticated);
  console.log(" todos =====> ", todos);

  return (
    <div
      style={{
        padding: 24,
        minHeight: 280,
        margin: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          backgroundColor: "white",
          padding: 24,
          width: "50%",
          margin: "auto",
          borderRadius: 10,
          marginBottom: 50,
        }}
      >
        <Row
          style={{
            marginTop: 20,
            marginBottom: 20,
            width: "70%",
            marginLeft: "auto",
            marginRight: "auto",
            borderRadius: 8,
            padding: 10,
            backgroundColor: "white",
            boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)",
          }}
        >
          <Col span={24}>
            <Input
              placeholder=" Please enter your todo here"
              style={{
                borderStyle: "none",
                outline: "none",
                boxShadow: "none",
                borderRadius: 2,
                padding: 3,
                fontSize: 16,
              }}
              onChange={(e) => {
                setInputValue({
                  ...inputValue,
                  content: e.target.value,
                });
              }}
            />
            <Button
              style={{
                marginLeft: 10,
                padding: "0 20px",
                fontSize: 16,
                borderRadius: 5,
                backgroundColor: "#00a8ff",
                color: "white",
              }}
              onClick={() => {
                dispatch(addTodo(inputValue));
              }}
            >
              Add
            </Button>
          </Col>
        </Row>
        <Row
          style={{
            marginBottom: 20,
            width: "70%",
            marginLeft: "auto",
            marginRight: "auto",
            padding: 10,
            backgroundColor: "white",
          }}
        >
          <Col span={24}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              {isAuthenticated &&
                userTodos.map((todo) => (
                  <div
                    key={todo.id}
                    style={{
                      boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)",
                      borderRadius: 8,
                      padding: 15,
                      marginBottom: 10,
                      textDecoration: todo.isCompleted
                        ? "line-through"
                        : "none",
                      height: "auto",
                      width: "100%",
                    }}
                  >
                    <span>{todo.content}</span>
                  </div>
                ))}

              {isAuthenticated === false &&
                anonimTodos.map((todo) => (
                  <div
                    key={todo.id}
                    style={{
                      boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)",
                      borderRadius: 8,
                      padding: 15,
                      marginBottom: 10,
                      textDecoration: todo.isCompleted
                        ? "line-through"
                        : "none",
                      height: "auto",
                      width: "100%",
                    }}
                  >
                    <span>{todo.content}</span>
                  </div>
                ))}
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Todos;
