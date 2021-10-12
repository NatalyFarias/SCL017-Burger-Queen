import React from 'react';
import {
  Button,
  Card,
  CardText,
  CardTitle,
} from 'reactstrap';

export default function Product({ menu, handleAddProduct }) {
  const { id, image, name, price } = menu;
//funcion que se encarga de llamar a la refereancia del metodo handleaddproduct al momento de precionar el click en agregar 
  const handleClickAddNewProduct = () => {
    //funcion que viene del productlist
    handleAddProduct({
      id, image, name, price
    });
  }
  return (
    <div>
      <Card body>
        <section className="d-flex justify-content-between">
          <img className="w-25" src={image} alt="Imagen de Producto" />
          <section className="d-flex flex-column justify-content-center">
            <CardTitle>{name}</CardTitle>
            <CardText>Precio: {price}</CardText>
          </section>
          <Button id={"product-" + id} key={id} type="button" className="w-15" onClick={handleClickAddNewProduct}>Agregar</Button>
        </section>
      </Card>
    </div>
  );
}