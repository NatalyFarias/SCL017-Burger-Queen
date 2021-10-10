import './App.css';
import logo from './assets/images/logo-burger.png';
import cocinero from './assets/images/cocinero.png'
import iconMenu from './assets/images/menu-almuerzo.png';
import iconOrder from './assets/images/orden.png';
import mesero from './assets/images/mesero.png';
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
import Order from './views/Order';
import Home from './views/Home';
import Menu from './views/Menu';
import Kitchen from './views/Kitchen'

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
                <Link to="/kitchen" className="text-decoration-none text-dark"><img src={cocinero} alt="cocina" width="50" height="50" /><span className="ml-50" >COCINA</span></Link>
              </NavItem>
              <UncontrolledDropdown nav inNavbar className="ml-4">
                <DropdownToggle nav caret>
                  <img src={mesero} alt="mesero" width="50" height="50" /><span className="ml-50">MESERO</span>
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <Card>
                      <CardBody>
                        <Link to="/menu" className="text-decoration-none text-dark"><img src={iconMenu} alt="menu almuerzo" width="25" height="25" /><span className="ml-50" >MENÚ</span></Link>
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
          <Route path="/kitchen">
            <Kitchen />
          </Route>
          <Route path="/menu">
            <Menu />
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

