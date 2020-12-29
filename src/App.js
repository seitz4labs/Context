import React from "react";
import "./styles.css";
import Sub1 from "./Sub1";
import Control from "./Control";
import MyProv from "./MyProv";
import marked from "marked";

export default function App() {
  console.log("App");
  const mdText = marked("# title \n<b>Hi</b>", false);
  return (
    <div className="App">
      <MyProv>
        <h1>Start editing to see some magic happen today!</h1>
        <Sub1 />
        <Control />
      </MyProv>
      <div dangerouslySetInnerHTML={{ __html: mdText }} />
    </div>
  );
}
