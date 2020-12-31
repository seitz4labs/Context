import React, { useRef, useState } from "react";
import "./styles.css";
import Sub1 from "./Sub1";
import Control from "./Control";
import MyProv from "./MyProv";
import TextWithMarkdown from "./TextWithMarkdown";

export default function App() {
  console.log("App");
  const [body, setBody] = useState(
    "initial Body is what you want\n  # This is a title\n  ## subtitle\n  1. famoto\n  1. amogo\n     * apple\n     * today\n  ```\n    note: This is code\n     other: 'stuff'\n  ```"
  );
  return (
    <div className="App">
      <MyProv>
        <h1>Start editing to see some magic happen today!</h1>
        <Sub1 />
        <Control />
      </MyProv>
      <textarea value={body} onChange={(e) => setBody(e.target.value)} />
      <TextWithMarkdown text={body} />
    </div>
  );
}
