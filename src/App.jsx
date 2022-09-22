"use strict";
import { useRoutesWithMiddleware } from "react-router-middleware-plus";
import routes from "./router";
import { Link } from "react-router-dom";

function App() {
  return (
    <div>
      <div>
        <Link to="/">home</Link>
      |
        <Link to="/about">about</Link>
      |
        <Link to="/about?login=true">about模拟登录</Link>
      </div>
      <div>{useRoutesWithMiddleware(routes)}</div>
    </div>
  );
}

export default App;
