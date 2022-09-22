"use strict";

import { ADD, SUB, MUL, DIV } from "./actionTypes";

const initState = {
  res: 0,
};

export default function calcReducer(state = initState, payload) {
  let res = state.res;
  let { type, num1, num2 } = payload;

  num1 = Number(num1);
  num2 = Number(num2);
  switch (type) {
    case ADD:
      res = num1 + num2;
      break;
    case SUB:
      res = num1 - num2;
      break;
    case MUL:
      res = num1 * num2;
      break;
    case DIV:
      res = num1 / num2;
      break;
    default:
      console.info("[calacReducer] unknown type");
      return state;
  }

  console.info(res);
  return { res };
}
