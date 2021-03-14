import React from "react";
//pages
import Home from "./pages/Home";
//COMPONENTS
import GlobalStyle from "./components/GlobalStyles";
import { Route } from "react-router";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Route path={["/game/:id", "/"]}>
        <Home />
      </Route>
    </div>
  );
}

export default App;
