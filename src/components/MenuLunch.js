import './MenuLunch.css';
import { Card, CardTitle, CardText, Container, Row, Col } from 'reactstrap';
import menuLunch from "./../data/menu-lunch";

const MenuLunch = () => {
  return (
    <Container className="MenuLunch">
      <Row>
      {
        menuLunch.map((menu) => (
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

export default MenuLunch;
