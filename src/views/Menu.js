import React, { useState, useEffect, useRef } from "react";
import OrderDetail from "../components/OrderDetail";
import ProductList from "../components/ProductList";
import { v4 as uuidv4 } from 'uuid';
import { firestoreSaveOrder, firestoreGetTotalOrders } from './../database/firestore'

export default function Menu() {
    //variable de estado que maneja un pedido de un cliente
    const [orders, setOrders] = useState([]);

    const orderNumberRef = useRef();
    const customerRef = useRef();

    useEffect(() => {
        firestoreGetTotalOrders("orders").then(response => {
            orderNumberRef.current.value = response+ 1;
        })
    }, []);

    const handleAddProduct = (menu) => {
        setOrders((prevOrders) => {
            return [...prevOrders, {
                id: uuidv4(),
                name: menu.name,
                price: menu.price,
                image: menu.image,
            }];
        })

        // setOrders(menuBreakfast);
    };

    const totalPriceProduct = () => {
        let amountTotalOrder = 0;
        orders.forEach(order => {
            amountTotalOrder = amountTotalOrder + order.price;
        })
        return amountTotalOrder;

    }

    const handleDeleteProduct = (id) => {
        console.log('id: ' + id);
        const newOrders = [...orders];
        const index = newOrders.findIndex(elemento => elemento.id === id);
        newOrders.splice(index, 1);
        console.log('index: ' + index);
        setOrders(newOrders);
    };

    const saveOrder = async () => {
        const totalOrderPrice = totalPriceProduct();
        const order = {
            "id": orderNumberRef.current.value,
            "customer": customerRef.current.value,
            "totalPrice": totalOrderPrice,
            "status": "ELABORACION",
            "ordersDetails": orders
        };
        await firestoreSaveOrder("orders", order);
    }

    const clearOrderDetail = () => {
        setOrders([])
    }
    return (

        <div className='Lunch'>
            <section>
                <input placeholder=" Nombre de cliente" type="text" ref={customerRef} />
                <input placeholder=" N° de orden" type="text" ref={orderNumberRef} />
            </section>
            <ProductList handleAddProduct={handleAddProduct} />
            <hr />
            <OrderDetail orders={orders} handleDeleteProduct={handleDeleteProduct} />
            <section>
                <label>total</label>
                <label>
                    {totalPriceProduct()}
                </label>
            </section>
            <section>
                <button type="button" onClick={clearOrderDetail}>Limpiar</button>
                <button type="button" onClick={saveOrder}>Enviar a cocina</button>
            </section>

        </div>
    )
}