import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

import { AboutLazy, HomePageLazy, ShopLazy, UsersPageLazy } from "@/pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback="Loading...">
        <HomePageLazy />
      </Suspense>
    ),
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
