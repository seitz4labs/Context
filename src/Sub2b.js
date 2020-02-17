import React from "react";
import { useMyProv } from "./MyProv";

export default function Sub2b() {
  const [cCount] = useMyProv();
  console.log("Sub2b");
  return (
    <div>
      <h3>sub2b</h3>
      cCount b = {cCount.c2}
    </div>
  );
}
