import './Home.css';
import { Container, Row, Col } from 'reactstrap';
import bienvenida from './../assets/images/bienvenida.png';

export default function Home() {
  return (
    <Container className="home">
      <Row>
        <Col xs="12" className="center-image">
          <img src={bienvenida} alt="bienvenida"  />
        </Col>
      </Row>
    </Container>
  )
}
