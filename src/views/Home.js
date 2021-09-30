import React from "react";
// import { Button, Card, CardTitle, CardText } from 'reactstrap';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Waiter from './Waiter';
// import Breakfast from "./Breakfast";
export default function Home() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/waiter">Mesero</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Switch>
        <Route path="/waiter">
          <Waiter />
        </Route>
      </Switch>
    </Router>
  );
}
