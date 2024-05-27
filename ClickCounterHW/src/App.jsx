import React, { useState } from "react";
import ClickCounter from "./ClickCounter";
import ClickButton from "./ClickButton";
import ResetFunction from "./Reset";

function App() {
  const [count, setCount] = useState(0);

  const countClick = () => {
    setCount(count + 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="container">
      <ClickCounter count={count} />
      <div className="innerDiv">
        <ClickButton onClick={countClick} />
        <ResetFunction onClick={reset} />
      </div>
    </div>
  );
}

export default App;
