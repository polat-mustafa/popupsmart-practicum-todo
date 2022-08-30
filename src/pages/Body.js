import React from "react";
import { Layout } from "antd";
import { Headers, Footers, Todos } from "../pages";

const { Header, Footer, Content } = Layout;

const Body = () => {
  return (
    <div>
      <Header>
        <Headers />
      </Header>
      <div
        style={{
          height: "100%",
          backgroundColor: "#f0f2f5",
          marginBottom: 20,
        }}
      >
        <Todos />
      </div>
      <Footer
        style={{
          backgroundColor: "#001529",
          color: "white",
          position: "fixed",
          bottom: 0,
          width: "100%",
          height: 50,
          marginTop: 20,
        }}
      >
        <Footers />
      </Footer>
    </div>
  );
};

export default Body;
