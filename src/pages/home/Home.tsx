import { Link, Outlet } from "react-router-dom";

import { Counter } from "@/components/Counter";

const Home = () => {
  return (
    <>
      <Link to={"/about"}>About</Link>
      <Link to={"/shop"}>Shop</Link>
      <Counter />
      <Outlet />
    </>
  );
};

export default Home;
