import React, { useState } from "react";
import OrderDetail from "../components/OrderDetail";
import Product from "../components/Product";

export default function Menu() {
    const [orders, setOrders] = useState([]);
    // setOrders(menuBreakfast);

    const handleAddProduct = (menu) => {
        setOrders((prevOrders) => {
            return [...prevOrders, {
                id: menu.id,
                name: menu.name,
                price: menu.price,
                image: menu.image,
            }];
        })

        // setOrders(menuBreakfast);
    };

    return (
        <div className='Lunch'>
            <Product handleAddProduct={handleAddProduct} />
            <hr />
            <OrderDetail orders={orders} />
        </div>
    )
}