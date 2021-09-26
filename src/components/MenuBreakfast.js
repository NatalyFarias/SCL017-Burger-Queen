import { Card, CardTitle, CardText } from 'reactstrap';
import menuBreakfast from "./../data/menu-breakfast";

const MenuBreakfast = () => {
  return (
    <div className="MenuBreakfast">
      {
        menuBreakfast.map((menu) => (
          <Card key={menu.id}>
            <CardTitle>{menu.name}</CardTitle>
            <CardText>precio: {menu.price}</CardText>
          </Card>
        ))
      }
    </div>
  );
}

export default MenuBreakfast;
