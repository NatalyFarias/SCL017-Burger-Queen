import iconCheck from'./../assets/images/check.png';
import { Table, Button, Container } from 'reactstrap';

const Order = () => {
    return (
        <Container className='Order'>
            <Table>
                {/*se definen columnas*/}
                <thead>
                    <tr>
                        <th>Cliente</th>
                        <th>N° de Orden</th>
                        <th>N° Mesa</th>
                        <th>Estado de pedido</th>
                        <th></th>
                    </tr>
                </thead>
                {/* aca se gregan valores*/}
                <tbody>
                    <tr>
                        <td><Button color='secondary'>ICONO</Button></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td><Button ><img src={iconCheck} alt="check" width="25" height="25" /></Button></td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    )
}

export default Order;