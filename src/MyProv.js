import React, { useReducer, useContext } from "react";

const MyContext = React.createContext();

const initialState = { c1: 5, c2: 10 };

function reducer(state, action) {
  console.log("updatecount " + action.type);
  switch (action.type) {
    case "incC1":
      return { ...state, c1: state.c1 + 1 };
    case "incC2":
      return { ...state, c2: state.c2 + 1 };
    default:
      throw new Error();
  }
}

export default function MyProv(props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const myContext = {
    c1c2: state,
    inc1: () => {
      dispatch({ type: "incC1" });
    },
    inc2: () => {
      dispatch({ type: "incC2" });
    }
  };

  return (
    <MyContext.Provider value={myContext}>
      {props.children}xx
    </MyContext.Provider>
  );
}

export const useMyProv = () => {
  const myContext = useContext(MyContext);
  return [myContext.c1c2, myContext.inc1, myContext.inc2];
};
