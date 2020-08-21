import React from 'react';
import HomePage from './container/HomePage';
import OverviewPage from './container/OverviewPage'
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route path="/" exact strict component={HomePage}/>
          <Route path="/overview/:userName" exact strict component={OverviewPage}/>
          <Route render={() => <Redirect to={{pathname: "/"}} />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
