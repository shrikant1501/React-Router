import Body from "./components/Body";
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));

const Applayout = () => {
  return (
    <div className="bg-amber-300">
      <Header />
      <Body />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,

    errorElement: <Error />,
  },
]);
// root.render(<Applayout />);
root.render(<RouterProvider router={appRouter} />);
