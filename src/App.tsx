import React from "react";
import Header from "./components/Header";
import Toolbar from "@material-ui/core/Toolbar";
import Main from "./components/Main";
import { CssBaseline } from "@material-ui/core";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <CssBaseline />
        <Header />
        <Toolbar />
        <Main />
      </Router>
    </>
  );
}

export default App;
