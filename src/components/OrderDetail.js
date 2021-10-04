import './OrderDetail.css'
import { Table, Button, Container } from 'reactstrap';

const OrderDetail = () => {
    return (
        <Container className='OrderDetail'>
            <Table>
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
                    <tr>
                        <td><Button color='secondary'>ICONO</Button></td>
                        <td>1</td>
                        <td>500</td>
                        <td>500</td>
                        <td><Button color='danger'>ELIMINAR</Button></td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    )
}

export default OrderDetail;