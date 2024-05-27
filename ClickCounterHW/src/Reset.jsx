import React from "react";

function ResetFunction({ onClick }) {
  return (
    <button onClick={onClick} className="reset-btn">
      Reset
    </button>
  );
}

export default ResetFunction;
