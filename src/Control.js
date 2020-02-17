import React from "react";
import { useMyProv } from "./MyProv";

export default function Control() {
  const { cCount, updateCount } = useMyProv();

  console.log("Control");
  return (
    <div>
      <h1>Control</h1>
      <h3>cCount = {cCount}</h3>
      <button onClick={() => updateCount(cCount - 1)}>Dec cCount</button>
    </div>
  );
}
