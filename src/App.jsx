import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import ErrorBoundary from './ErrorBoundary';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
          </Switch>
        </Layout>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
