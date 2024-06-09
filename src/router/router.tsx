import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

import { App } from "../components/App";
import { AboutLazy, ShopLazy, UsersPageLazy } from "../pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/about",
        element: (
          <Suspense fallback="Loading...">
            <AboutLazy />
          </Suspense>
        ),
      },
      {
        path: "/shop",
        element: (
          <Suspense fallback="Loading...">
            <ShopLazy />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/users",
    element: (
      <Suspense fallback="Loading...">
        <UsersPageLazy />
      </Suspense>
    ),
  },
]);
