import React, { useState } from "react";
import OrderDetail from "../components/OrderDetail";
import ProductList from "../components/ProductList";
import { v4 as uuidv4 } from 'uuid';

export default function Menu() {
    const [orders, setOrders] = useState([]);

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

    return (
        <div className='Lunch'>
            <ProductList handleAddProduct={handleAddProduct} />
            <hr />
            <OrderDetail orders={orders} />
        </div>
    )
}