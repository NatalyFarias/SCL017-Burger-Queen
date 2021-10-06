import React, { useState } from 'react';
import {
  Row,
  Col,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Button,
  Card,
  CardImg,
  CardText,
  CardTitle,
} from 'reactstrap';
import classnames from 'classnames';
import menuBreakfast from "../data/menu-breakfast";
import menuLunch from "../data/menu-lunch";


export default function Product({ handleAddProduct }) {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  }
  const handleClickAddProduct = (menu) => {
    console.log('se hizo click');
    handleAddProduct(menu);
  }
  return (
    <div>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}
          >
            Desayuno
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}
          >
            Almuerzo
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row className="mt-4">
            {
              menuBreakfast.map((menu) => (
                <Col key={menu.id} sm="6">
                  <Card body>
                    <section className="d-flex justify-content-center">
                      <CardImg className="w-25" src={menu.image} alt="Imagen de Producto" />
                    </section>
                    <CardTitle>{menu.name}</CardTitle>
                    <CardText>Precio: {menu.price}</CardText>
                    <section className="d-flex justify-content-center">
                      <Button type="submit" className="w-25" onClick={ handleClickAddProduct}>Agregar</Button>
                    </section>
                  </Card>
                </Col>
              ))
            }
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row className="mt-4">
            {/* {
              menuLunch.map((menu) => (
                <Col sm="6">
                  <Card body key={menu.id}>
                    <CardTitle>{menu.name}</CardTitle>
                    <CardText>Precio: {menu.price}</CardText>
                    <Button>Agregar</Button>
                  </Card>
                </Col>
              ))
            } */}
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
}