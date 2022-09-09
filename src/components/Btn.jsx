import React from "react";

const Btn = ({ text, type, onClick }) => {
  const BtnType = ["red", "negative"].includes(type) ? type : "default";
  return (
    <button className={["Btn", `Btn_${BtnType}`].join(" ")} onClick={onClick}>
      {text}
    </button>
  );
};

export default Btn;

Btn.defaultProps = {
  type: "default",
};
