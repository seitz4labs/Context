import React, { useContext } from "react";
import { useMyProv } from "./MyProv";

export default function Sub2() {
  const { cCount, cUpdate } = useMyProv();
  console.log("Sub2");
  return (
    <div>
      <h3>sub2</h3>
      cCount = {cCount}
    </div>
  );
}
