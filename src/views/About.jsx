"use strict";
import { useSelector, useDispatch } from "react-redux";
import { ADD, SUB, MUL, DIV } from "@/store/actionTypes";
import { useState } from "react";

export default function About() {
  const [type, setType] = useState(ADD);
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  const res = useSelector((state) => state.res);
  const dispatch = useDispatch();

  function calcResult() {
    dispatch({ type, num1, num2 });
  }

  return (
    <div>
      <p>about</p>
      <div>
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value={ADD}>+</option>
          <option value={SUB}>-</option>
          <option value={MUL}>*</option>
          <option value={DIV}>/</option>
        </select>
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />
        <button onClick={calcResult}>=</button>
        <span>{res}</span>
      </div>
    </div>
  );
}
