import { useState } from "react";

import * as classes from "./App.module.scss";
import "./App.css";

export const App = () => {
  const [counter, setCounter] = useState<number>(0);

  const increment = () => setCounter((prev) => prev + 1);

  return (
    <>
      <p className={classes.counter}>{counter}</p>
      <button onClick={increment}>Click</button>
    </>
  );
};
