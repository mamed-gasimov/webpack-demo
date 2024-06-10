import { Outlet } from "react-router-dom";

import * as classes from "./App.module.scss";

export const App = () => {
  return (
    <div>
      <h1 className={classes["module_name"]}>SHOP MODULE</h1>
      <Outlet />
    </div>
  );
};
