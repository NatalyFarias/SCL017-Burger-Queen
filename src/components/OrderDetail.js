import './OrderDetail.css'
import { Table, Button, Container } from 'reactstrap';
import eliminar_22 from './../assets/images/eliminar_22.png';


export default function OrderDetail({ orders }) {
    console.log('hola mundo');
    return (
        <Container className='OrderDetail'>
            <Table hover>
                {/*se definen columnas*/}
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Cantidad</th>
                        <th>Precio</th>
                        <th>Subtotal</th>
                        <th></th>
                    </tr>
                </thead>
                {/* aca se gregan valores*/}
                <tbody>
                    {
                        [...orders].map(order => (
                            <tr key={order.id}>
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
                                <td><Button><img src={eliminar_22} alt="eliminar" width="25" height="25" /></Button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </Container>
    )
}