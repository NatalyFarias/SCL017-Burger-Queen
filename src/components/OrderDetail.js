import './OrderDetail.css'
import { Table, Button, Container, Card } from 'reactstrap';
import eliminar_22 from './../assets/images/eliminar_22.png';

export default function OrderDetail({ orders, setOrders, handleDeleteProduct }) {
    const handleClickDeleteProduct = (e) => {
        const id = e.target.id;
        handleDeleteProduct(id);
    }
    return (
        <Container className='OrderDetail'>
            <Card body>
                <Table hover>
                    {/*se definen columnas*/}
                    <thead>
                        <tr>
                            <th>Producto</th>
                            <th>Nombre</th>
                            <th>Precio</th>
                            {/* <th>Cantidad</th> */}
                            {/* <th>Subtotal</th> */}
                            <th></th>
                        </tr>
                    </thead>
                    {/* aca se gregan valores*/}
                    <tbody>
                        {
                            [...orders].length > 0 ?
                                [...orders].map(order => (
                                    <tr key={order.id}>
                                        <td><img src={order.image} alt={order.name} width="75" height="75" /></td>
                                        <td>{order.name}</td>
                                        <td>{order.price}</td>
                                        <td><img id={order.id} src={eliminar_22} alt="eliminar" width="75" height="75" onClick={handleClickDeleteProduct} /></td>
                                    </tr>
                                )) : <tr><td colSpan="4">No hay porductos</td></tr>
                        }
                    </tbody>
                </Table>
            </Card>
        </Container>
    )
}