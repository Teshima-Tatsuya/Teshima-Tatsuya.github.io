import React from "react";
import Header from "./components/Header";
import Toolbar from "@material-ui/core/Toolbar";
import Main from "./components/Main";
import { CssBaseline } from "@material-ui/core";

function App() {
  return (
    <>
      <CssBaseline />
      <Header />
      <Toolbar />
      <Main />
    </>
  );
}

export default App;
