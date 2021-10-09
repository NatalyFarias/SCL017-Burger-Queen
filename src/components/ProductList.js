import React, { useState } from 'react';
import {
  Row,
  Col,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import classnames from 'classnames';
import menuBreakfast from "../data/menu-breakfast";
import menuLunch from "../data/menu-lunch";
import Product from "./Product";


export default function ProductList({ handleAddProduct }) {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  }
  const handleClickAddProduct = (menu) => {
    console.log('se hizo click : ' + menu.price);
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
                  <Product menu={menu} handleClickAddProduct={handleClickAddProduct} />
                </Col>
              ))
            }
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row className="mt-4">
            {
              menuLunch.map((menu) => (
                <Col key={menu.id} sm="6">
                  <Product menu={menu} handleClickAddProduct={handleClickAddProduct} />
                </Col>
              ))
            }
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
}