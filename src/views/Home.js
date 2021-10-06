import './Home.css';
import { Container, Row, Col } from 'reactstrap';
import bienvenida from './../assets/images/bienvenida.png';

const Home = () => {
  return (
    <Container className="home">
      <Row>
        <Col xs="12" className="center-image">
          <img src={bienvenida} alt="bienvenida" />
        </Col>
      </Row>
    </Container>
  )
};

export default Home;
