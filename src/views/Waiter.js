import { Button, Card, CardTitle, CardText } from 'reactstrap';

const Waiter = () => {
    return (
      <div className="Waiter">
        <Card>
          <CardTitle><Button color="dark"></Button></CardTitle>
          <CardText>MENÚ</CardText>
        </Card>
        <Card>
          <CardTitle><Button color="dark"></Button></CardTitle>
          <CardText>DESAYUNO</CardText>
        </Card>
        <Card>
          <CardTitle><Button color="dark"></Button></CardTitle>
          <CardText>PEDIDOS</CardText>
        </Card>
      </div>
    );
  }
  
  export default Waiter;
  