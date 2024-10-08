import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import CardsContainer from "./components/CardsContainer";
import CardDetails from "./components/CardDetails";

const root = ReactDOM.createRoot(document.getElementById("root"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/discover" replace />, // Redirect root path to /discover
    errorElement: <Navigate to="/discover" replace />
  },
  {
    path: "/discover",
    element: <App />,
    children: [
      {
        path: "/discover",
        element: <CardsContainer />,
      },
      {
        path: "page/:cardId",
        element: <CardDetails />,
      },
    ],
  },
]);

root.render(<RouterProvider router={appRouter} />);

