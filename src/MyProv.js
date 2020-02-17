import React, { useState, useContext } from "react";

const MyContext = React.createContext();

export default function MyProv(props) {
  const [cCount, setCCount] = useState(300);

  const updateCount = newCCount => {
    console.log("updatecount " + newCCount);
    setCCount(newCCount);
  };

  return (
    <MyContext.Provider value={{ count: cCount, update: updateCount }}>
      {props.children}xx
    </MyContext.Provider>
  );
}

export const useMyProv = () => {
  const myContext = useContext(MyContext);
  return { cCount: myContext.count, updateCount: myContext.update };
};
