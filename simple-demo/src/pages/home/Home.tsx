import { Link, Outlet } from "react-router-dom";

import { Counter } from "@/components/Counter";
import logoPng from "@/assets/react_logo.png";
import SnowIcon from "@/assets/snow.svg";
import * as classes from "./Home.module.scss";

const Home = () => {
  return (
    <>
      <Link to={"/about"}>About</Link>
      <br />
      <Link to={"/shop"}>Shop</Link>
      <Counter />
      <div>
        <img src={logoPng} alt="logo" className={classes.logo} />
      </div>
      <div>
        <SnowIcon style={{ color: "green" }} width={50} height={50} />
      </div>
      <Outlet />
    </>
  );
};

export default Home;
