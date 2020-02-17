import React from "react";
import { useMyProv } from "./MyProv";

export default function Control() {
  const { cCount, cUpdate } = useMyProv();

  console.log("Control");
  return (
    <div>
      <h1>Control</h1>
      <h3>cCount = {cCount}</h3>
      <button onClick={() => cUpdate(cCount - 1)}>Dec cCount</button>
    </div>
  );
}
