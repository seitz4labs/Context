import React, { useState, useContext } from "react";

const MyContext = React.createContext();

export default function MyProv(props) {
  const [cCount, setCCount] = useState({ c1: 5, c2: 10 });

  const updateCount = newCCount => {
    console.log("updatecount " + newCCount.c1 + " " + newCCount.c2);
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
  return [myContext.count, myContext.update];
};
