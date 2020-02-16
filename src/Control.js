import React, { useState, useContext } from "react";
import { MyContext } from "./MyProv";

export default function Control() {
  const [count, setCount] = useState(0);
  const cCount = useContext(MyContext);

  console.log("Control");
  return (
    <div>
      <h1>Control</h1> count = {count}
      <h3>cCount = {cCount.count}</h3>
      <button onClick={() => setCount(count + 1)}>Inc</button>
      <button onClick={() => cCount.update(cCount.count - 1)}>
        Dec cCount
      </button>
    </div>
  );
}
