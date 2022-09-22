"use strict";
import React from "react";
import { Navigate } from "react-router-dom";

/**
 * 检查是否登录中间件
 */
function checkLogin({ children }) {
  // TODO: 写死的isLogin
  const isLogin = window.location.href.includes("login=true");

  if (isLogin) {
    return <>{children}</>;
  }

  window.alert("请先登录");
  return <Navigate replace to="/" />;
}

export default checkLogin;
