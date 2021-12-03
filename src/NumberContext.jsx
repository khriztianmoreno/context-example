import { createContext, useContext, useState } from "react";

const NumberContext = createContext();

export const NumberProvider = ({ children, value = 0 }) => {
  const [number, setNumber] = useState(value);

  const valuesToPass = {
    number, // numero
    setNumber, // function
  }

  return (
    <NumberContext.Provider value={valuesToPass}>
      {children}
    </NumberContext.Provider>
  )
}

export const useStateNumber = () => {
  const context = useContext(NumberContext);

  if (context === undefined) {
    throw new Error("useStateNumber must be used within a NumberProvider");
  }

  return context;
}

