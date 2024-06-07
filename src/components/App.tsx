import { useState } from "react";

import "./App.css";
import "./styles.scss";

export const App = () => {
  const [counter, setCounter] = useState<number>(0);

  const increment = () => setCounter((prev) => prev + 1);

  return (
    <>
      <p className="counter">{counter}</p>
      <button onClick={increment}>Click</button>
    </>
  );
};
