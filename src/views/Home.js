import './Home.css';
import logo from './../assets/images/logo-burger.png';
import iconMenu from'./../assets/images/menu-almuerzo.png';
import iconMenuDesayuno from'./../assets/images/menu-desayuno.png';
import iconOrder from'./../assets/images/orden.png';

import React, { useState } from "react";
import { Container, Row, Col, Card, CardBody, Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText } from 'reactstrap';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import Waiter from './Waiter';
import Breakfast from './Breakfast';
import Lunch from './Lunch';
import Order from './Order';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
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
                        <img src={iconOrder} alt="orden" width="25" height="25" />
                        <Link to="/order"> PEDIDOS</Link>
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
        </Switch>
      </Router>
    </div>
    // <Router>
    //   <Link to="/home">
    //     <img src={logo} alt="Logo MR-Burger" />
    //   </Link>
    //   {/* <Redirect exact from='/' to='/waiter' /> */}
    //   <Container className="Home">
    //     <Row className="Home-vertical-center">
    //       <Col md="6">
    //         <Card>
    //           <CardBody>
    //             <Link to="/waiter">Mesero</Link>
    //           </CardBody>
    //         </Card>
    //       </Col>
    //       <Col md="6">
    //         <Card>
    //           <CardBody>
    //             <Link to="/kitchen">Cocina</Link>
    //           </CardBody>
    //         </Card>
    //       </Col>
    //     </Row>
    //   </Container >
    //   <Switch>
    //     <Route path="/waiter">
    //       <Waiter />
    //     </Route>
    //   </Switch>
    // </Router>
  );
}
