import { Suspense } from "react";
import { Navigate, createBrowserRouter } from "react-router-dom";

import { UserCard } from "@packages/shared/src/components/UserCard";
import { App } from "@/components/App/App";
import { Shop } from "@/pages/Shop";

const routes = [
  {
    path: "/",
    element: <Navigate to="/shop" replace />,
  },
  {
    path: "/shop",
    element: <App />,
    children: [
      {
        path: "/shop/main",
        element: (
          <Suspense fallback={"Loading..."}>
            <Shop />
          </Suspense>
        ),
      },
      {
        path: "/shop/second",
        element: (
          <Suspense fallback={"Loading..."}>
            <div style={{ color: "red" }}>
              <h1>second page</h1>
              <UserCard username={"FROM SHOP"} />
            </div>
          </Suspense>
        ),
      },
    ],
  },
];

export const router = createBrowserRouter(routes);

export default routes;
