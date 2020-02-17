import React from "react";
import Sub2 from "./Sub2";
import Sub2b from "./Sub2b";

export default function Sub1() {
  console.log("Sub1");
  return (
    <div>
      <h1>sub1</h1>
      <Sub2 />
      <Sub2b />
    </div>
  );
}
