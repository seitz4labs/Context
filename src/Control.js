import React from "react";
import { useMyProv } from "./MyProv";

export default function Control() {
  const [cCount, up1, up2] = useMyProv();

  console.log("Control");
  return (
    <div>
      <h1>Control</h1>
      <h3>cCount 1 = {cCount.c1}</h3>
      <h3>cCount 2 = {cCount.c2}</h3>
      <button onClick={() => up1()}>Dec 1</button>
      <button onClick={() => up2()}>Dec 2</button>
    </div>
  );
}
