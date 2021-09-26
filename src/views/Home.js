import { Button, Card, CardTitle, CardText } from 'reactstrap';

const Home = () => {
    return (
      <div className="Home">
        <Card>
          <CardTitle><Button color="dark"></Button></CardTitle>
          <CardText>MESERO</CardText>
        </Card>
        <Card>
          <CardTitle><Button color="dark"></Button></CardTitle>
          <CardText>COCINA</CardText>
        </Card>
      </div>
    );
  }
  
  export default Home;
  