import React, { useState } from "react";

export default function Control() {
  [count, setCount] = useState(0);

  console.log("Control");
  return (
    <div>
      <h1>Count</h1> {count}
      <button onClick={() => setCount(count + 1)}>Inc</button>
    </div>
  );
}
