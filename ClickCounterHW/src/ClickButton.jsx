import React from "react";

function ClickButton({ onClick }) {
  return (
    <button className="btn" onClick={onClick}>
      Click me
    </button>
  );
}

export default ClickButton;
