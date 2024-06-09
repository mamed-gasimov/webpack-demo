import { useState } from "react";

import * as classes from "./Counter.module.scss";

export const Counter = () => {
  const [counter, setCounter] = useState<number>(0);
  const increment = () => setCounter((prev) => prev + 1);

  return (
    <>
      <p className={classes.counter}>{counter}</p>
      <button onClick={increment}>Click</button>
    </>
  );
};
