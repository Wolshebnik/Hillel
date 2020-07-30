import React from "react";

const Button = ({func, text}) => {
  return (
    <>
      <button className={"button"} onClick={func}>{text}</button>
    </>
  );
};

export default Button;
