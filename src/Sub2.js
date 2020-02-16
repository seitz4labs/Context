import React, { useContext } from "react";
import { MyContext } from "./MyProv";

export default function Sub2() {
  const cCount = useContext(MyContext);
  console.log("Sub2");
  return (
    <div>
      <h3>sub2</h3>
      cCount = {cCount.count}
    </div>
  );
}
