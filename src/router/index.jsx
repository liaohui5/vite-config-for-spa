"use strict";
import Home from "%/Home";
import About from "%/About";
import checkLogin from "./checkLogin";

const routes = [
  {
    index: true,
    element: <Home />,
  },
  {
    path: "/about",
    middleware: [checkLogin],
    element: <About />,
  },
];

export default routes;
