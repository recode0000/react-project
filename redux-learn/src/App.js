
import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { decrease, increase } from "./feature/counter/counterSlice";

function App() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>COUNT: {count}</h1>
      <button onClick={() => dispatch(increase())}>UP</button>
      <button onClick={() => dispatch(decrease())}>DOWN</button>

    </div>
  );
}

export default App;
