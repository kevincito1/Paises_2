import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./views/Home";
import Pais from "./views/Pais";

function App() {
  return (
    <BrowserRouter>
      <div className="App">        
        <Route exact path="/" component={Home} />{" "}
        <Route exact path="/pais/:id" component={Pais} />{" "}
      </div>
    </BrowserRouter>
  );
}

export default App;
