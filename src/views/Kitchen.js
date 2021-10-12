import React, { useState, useEffect } from 'react';
import { Card, Container, Row, Col, Jumbotron } from 'reactstrap';
import { firestoreGetOrderKitchenByStatus, firestoreUpdateOrderKitchenByStatus } from "./../database/firestore"

export default function Kitchen() {
    const [ordersKitchen, setOrdersKitchen] = useState([]);

    useEffect(() => {
        firestoreGetOrderKitchenByStatus("orders", "ELABORACION").then(response => {
            setOrdersKitchen(response);
        })
    }, []);
    //esta constante actualiza el estado de una orden
    const handleUpDateOrderStatus = (e) => {
        firestoreUpdateOrderKitchenByStatus("orders", e.target.id, "FINALIZADO").then(() => {
            alert("El pedido ha sido enviado a la zona de retiro");
            firestoreGetOrderKitchenByStatus("orders", "ELABORACION").then(response => {
                setOrdersKitchen(response);
            })
        })
    }

    return (
        <Container className='Kitchen vh-100'>
            <h1>ORDENES</h1>
            <Row>
                {
                    [...ordersKitchen].length > 0 ?
                        [...ordersKitchen].map(order => (
                            <Col xs="12" key={order.id} className="mt-2">
                                <Card key={order.id} body>
                                    <section>
                                        <label>N° orden : {order.data.id}</label>
                                        <label>Cliente; {order.data.customer}</label>
                                        {/* <label>Fecha ingreso</label>*/}

                                    </section>

                                    {/*esta seccion muestra la lista de productos que tiene un pedido */}
                                    <section>
                                        <ul>
                                            {
                                                [...order.data.ordersDetails].map(detail => (<li key={detail.id}>{detail.name}</li>))
                                            }
                                        </ul>
                                    </section>

                                    {/*esta seccion muestra el estado de la orden y el boton  al momento de cliclear actualiza el estado de la orden de elaboracion pasa a terminado */}
                                    <section>
                                        <label>Estado : {order.data.status}</label>
                                        <button type="button" key={order.id} id={order.id} onClick={handleUpDateOrderStatus}>check </button>
                                    </section>
                                </Card>
                            </Col>
                        )) : <Col xs="12" className="mt-2" >
                            <Card body>

                                <p className="display-5">No existen ordenes por preparar</p>

                            </Card>
                        </Col>
                }
            </Row>
        </Container>
    )
}