import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function ProductCard({
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
          {isCart ? (
            <div>
              <Button variant="danger" onClick={() => handleDelete(item._id)}>
                Remover del Carrito
              </Button>
            </div>
          ) : (
            <div>
              <Link to={"/edit/" + item._id}>
                <Button variant="primary">Editar</Button>
              </Link>
              <Button variant="danger" onClick={() => handleDelete(item._id)}>
                Eliminar
              </Button>
              <Button variant="primary" onClick={() => handleCart(item)}>
                Carrito
              </Button>
            </div>
          )}
        </Card.Body>
      </Card>
    </div>
  );
}
