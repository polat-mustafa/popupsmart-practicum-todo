import React from "react";
import { AiFillCaretRight } from "react-icons/ai";

const Footer = () => {
  return (
    <div>
      <p
        style={{
          color: "white",
          fontSize: 12,
          fontWeight: "bold",
          fontFamily: "revert-layer",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        Coded with ❤️ for <AiFillCaretRight />{" "}
        <a target="blank" href="https://popupsmart.com/">
          {" "}
          Popupsmart{" "}
        </a>
      </p>
    </div>
  );
};

export default Footer;
