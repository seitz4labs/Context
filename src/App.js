import React from "react";
import "./styles.css";
import Sub1 from "./Sub1";
import Control from "./Control";

export default function App() {
  console.log("App");
  return (
    <div className="App">
      <h1>Start editing to see some magic happen!</h1>
      <Sub1 />
      <Control />
    </div>
  );
}
