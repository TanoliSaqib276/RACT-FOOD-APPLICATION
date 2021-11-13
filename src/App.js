import React from "react";
import Routes from "./configs/routes";
import { ContextProvider } from "./context/globalContext";

function App() {
  return (
    <ContextProvider>
      <Routes />
    </ContextProvider>
  );
}

export default App;
