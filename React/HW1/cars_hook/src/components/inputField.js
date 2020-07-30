import React from "react";

function InputField({ placeHolder, change, name, value }) {
  return (
    <>
      <input
        className={"input-field"}
        placeholder={placeHolder}
        onChange={change}
        name={name}
        value={value}
      />
    </>
  );
}

export default InputField;
