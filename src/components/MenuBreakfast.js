import './MenuBreakfast.css';
import { Card, CardTitle, CardText, Container, Row, Col } from 'reactstrap';
import menuBreakfast from "./../data/menu-breakfast";

const MenuBreakfast = () => {
  return (
    <Container className="MenuBreakfast">
      <Row>
        {
          menuBreakfast.map((menu) => (
            <Col xs="6" className = "col-mt-100">
              <Card key={menu.id}>
                <CardTitle>{menu.name}</CardTitle>
                <CardText>precio: {menu.price}</CardText>
              </Card>
            </Col>
          ))
        }
      </Row>
    </Container>
  );
}

export default MenuBreakfast;
