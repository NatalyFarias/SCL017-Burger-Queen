import React, { useState, useRef } from 'react';
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

export default function Product({ menu, handleClickAddProduct }) {
  const { id, image, name, price } = menu

  const handleClickAddNewProduct = () => {
    handleClickAddProduct({
      id, image, name, price
    });
  }
  return (
    <div>
      <Card body>
        <section className="d-flex justify-content-center">
          <CardImg className="w-25" src={image} alt="Imagen de Producto" />
        </section>
        <CardTitle>{name}</CardTitle>
        <CardText>Precio: {price}</CardText>
        <section className="d-flex justify-content-center">
          <Button id={"product-" + id} key={id} type="button" className="w-25" onClick={handleClickAddNewProduct}>Agregar</Button>
        </section>
      </Card>
    </div>
  );
}