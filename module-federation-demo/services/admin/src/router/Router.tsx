import { Suspense } from "react";
import { Navigate, createBrowserRouter } from "react-router-dom";

import { App } from "@/components/App/App";
import { LazyAbout } from "@/pages/about/About.lazy";

const routes = [
  {
    path: "/",
    element: <Navigate to="/admin" replace />,
  },
  {
    path: "/admin",
    element: <App />,
    children: [
      {
        path: "/admin/about",
        element: (
          <Suspense fallback={"Loading..."}>
            <LazyAbout />
          </Suspense>
        ),
      },
    ],
  },
];

export const router = createBrowserRouter(routes);

export default routes;
