import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <a href="http://habitude-staging.frontify.com">Frontify</a>
        </Route>
        <Route
          path="/auth/:token"
          render={(props) => {
            localStorage.setItem('lala', props.match.params.token);
            props.history.push('/');
          }}
        />
      </Switch>
    </Router>
  );
}

export default App;
