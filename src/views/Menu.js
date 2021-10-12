import React, { useState, useEffect, useRef } from "react";
import OrderDetail from "../components/OrderDetail";
import ProductList from "../components/ProductList";
import { v4 as uuidv4 } from 'uuid';
import { firestoreSaveOrder, firestoreGetTotalOrders } from './../database/firestore'

//se exporta la funcion menu para ser usada en App.js
export default function Menu() {
    //variable de estado que maneja un pedido de un cliente
    const [orders, setOrders] = useState([]);
    //se declaran constantes para enlazar a elementos html(imput) para ser utilizados posteriormente
    const orderNumberRef = useRef();
    const customerRef = useRef();
    //hook useffect detecta cambios en el componente 
    //aqui le asignamos el numero de orden asignado al pedido
    useEffect(() => {
        firestoreGetTotalOrders("orders").then(response => {
            orderNumberRef.current.value = response + 1;
        })
    }, []);

    //metodo encargado ade agregar un nuevo producto a la variable order que esta en el estado
    const handleAddProduct = (menu) => {
        setOrders((prevOrders) => {
            return [...prevOrders, {
                id: uuidv4(),
                name: menu.name,
                price: menu.price,
                image: menu.image,
            }];
        })
    };
    //metodo que recupera el total de ordenes 
    const totalPriceProduct = () => {
        let amountTotalOrder = 0;
        orders.forEach(order => {
            amountTotalOrder = amountTotalOrder + order.price;
        })
        return amountTotalOrder;

    }
    //metodo responzable de eliminar un producto de la tabla de productos order detail
    const handleDeleteProduct = (id) => {
        const newOrders = [...orders];
        const index = newOrders.findIndex(elemento => elemento.id === id);
        newOrders.splice(index, 1);
        setOrders(newOrders);
    };
    //metodo que guarda una orden en firebase
    const saveOrder = () => {
        const totalOrderPrice = totalPriceProduct();

        // Validaciones
        if (customerRef.current.value === '') {
            alert("Recuerde ingresar el nombre del cliente");
            return;
        }
        //objeto al cual sera guardado en firebase
        const order = {
            "id": orderNumberRef.current.value,
            "customer": customerRef.current.value,
            "totalPrice": totalOrderPrice,
            "status": "ELABORACION",
            "ordersDetails": orders
        };
        //metodo que realiza el guardado de una orden en firestore. si la promesa se resuelve entra al bloque then
        firestoreSaveOrder("orders", order).then(() => {
            alert("El pedido ha sido enviado a cocina");
            clearOrderDetail();
        });
    }
    //limpia la  tabla del pedido
    const clearOrderDetail = () => {
        setOrders([])
    }
    return (

        <div className='Lunch vh-100'>
            { /*  esta seccion se encarga de que el mesero ingrese el nombre del cliente y se genera de forma auntomatica el n° de orden */}
            <section>
                <input placeholder=" Nombre de cliente" type="text" ref={customerRef} />
                <input placeholder=" N° de orden" type="text" ref={orderNumberRef} />
            </section>
            {/*aqui estan los componentes de la lista de pedidos y el detalle de la orden */}
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