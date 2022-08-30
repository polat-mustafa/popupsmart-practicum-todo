import React from "react";
import { Button } from "antd";
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <span
        style={{
          color: "white",
          fontSize: 20,
          fontWeight: "bold",
          fontFamily: "revert-layer",
        }}
      >
        Todo App
      </span>
      {isAuthenticated ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <img
            src={user.picture}
            alt={user.name}
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              marginRight: 10,
            }}
          />
          <span
            style={{
              color: "white",
              fontSize: 16,
              fontWeight: "bold",
              fontFamily: "revert-layer",
            }}
          >
            {user.name}
          </span>
          <Button
            style={{
              marginLeft: 20,
              padding: "0 20px",
              fontSize: 16,
              fontWeight: "bold",
              fontFamily: "revert-layer",
            }}
            onClick={logout}
          >
            Logout
          </Button>
        </div>
      ) : (
        <Button
          style={{
            padding: "0 20px",
            fontSize: 16,
            fontWeight: "bold",
            fontFamily: "revert-layer",
          }}
          onClick={loginWithRedirect}
        >
          Login
        </Button>
      )}
    </div>
  );
};

export default Header;
