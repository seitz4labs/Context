import React from "react";
import "./styles.css";
import Sub1 from "./Sub1";
import Control from "./Control";
import MyProv from "./MyProv";

export default function App() {
  console.log("App");
  return (
    <div className="App">
      <MyProv>
        <h1>Start editing to see some magic happen!</h1>
        <Sub1 />
        <Control />
      </MyProv>
    </div>
  );
}
