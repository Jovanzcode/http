import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function CategoryCard({
  item,
  handleDelete,
  handleCart,
  isCart,
}) {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={item.img} />
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>{item.description}</Card.Text>
          <Card.Text>{item.price}</Card.Text>

          <div>
            <Link to={"/edit/category/" + item._id}>
              <Button variant="primary">Editar</Button>
            </Link>
            <Button variant="danger" onClick={() => handleDelete(item._id)}>
              Eliminar
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
