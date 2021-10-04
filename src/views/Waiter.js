import './Waiter.css';
import React from "react";
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Breakfast from './Breakfast'
import Home from './Home';

export default function Waiter() {
  return (
    <Router>
      <Container className="Waiter">
        <Row className="Waiter-vertical-center">
          <Col md="8">
            <Card>
              <CardBody>
                <Link to="/menu">Menú</Link>
              </CardBody>
            </Card>
          </Col>
          <Col md="8">
            <Card>
              <CardBody>
                <Link to="/breakfast">Desayuno</Link>
              </CardBody>
            </Card>
          </Col>
          <Col md="8">
            <Card>
              <CardBody>
                <Link to="/orders">Pedidos</Link>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container >

      <Switch>
        <Route path="/breakfast">
          <Breakfast />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}