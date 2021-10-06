import './App.css';
import logo from './assets/images/logo-burger.png';
import iconMenu from './assets/images/menu-almuerzo.png';
import iconMenuDesayuno from './assets/images/menu-desayuno.png';
import iconOrder from './assets/images/orden.png';
import React, { useState } from "react";
import {
  Card,
  CardBody,
  Nav,
  Navbar,
  NavbarToggler,
  Collapse,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';
import Breakfast from './views/Breakfast';
import Lunch from './views/Lunch';
import Order from './views/Order';
import Home from './views/Home'

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className="app">
      <Router>
        <Navbar color="light" light expand="md">
          <Link to="/"><img src={logo} alt="Logo MR-Burger" width="100" height="100" /></Link>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem className="ml-4">
                <NavLink href="/kitchen/">COCINA</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  MESERO
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>

                    <Card>
                      <CardBody>
                        <img src={iconMenu} alt="menu almuerzo" width="25" height="25" />
                        <Link to="/lunch">MENÚ</Link>
                      </CardBody>
                    </Card>
                  </DropdownItem>
                  <DropdownItem>
                    <Card>
                      <CardBody>
                        <img src={iconMenuDesayuno} alt="menu desayuno" width="25" height="25" />
                        <Link to="/breakfast">DESAYUNO</Link>
                      </CardBody>
                    </Card>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <Card>
                      <CardBody>
                        <Link to="/order"><img src={iconOrder} alt="orden" width="25" height="25" /><span className="ml-50">PEDIDOS</span></Link>
                      </CardBody>
                    </Card>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
        <Switch>
          <Route path="/breakfast">
            <Breakfast />
          </Route>
          <Route path="/lunch">
            <Lunch />
          </Route>
          <Route path="/order">
            <Order />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

