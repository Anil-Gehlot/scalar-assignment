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
import HomePage from "./components/HomePage";

const root = ReactDOM.createRoot(document.getElementById("root"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Redirect root path to /discover
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "discover",
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
