import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import ErrorBoundary from "./ErrorBoundary";

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
