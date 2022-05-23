import { useEffect, useState } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
const axios = require("axios").default;

const Read = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    findAll();
  }, []);

  const findAll = () => {
    axios
      .get("http://192.168.0.17:3000/products")
      .then(function (response) {
        console.log(response.data);
        setList(response.data.body);
      })
      .catch(function (error) {
        //console.log(error);
      });
  };
  const handleDelete = (id) => {
    console.log(id);
    axios
      .delete("http://192.168.0.17:3000/product/" + id)
      .then(function (response) {
        findAll();
      })
      .catch(function (error) {
        //console.log(error);
      });
  };
  return (
    <div>
      <div className="App">
        <Container>
          <Row>
            <h1>Products</h1>
            <hr />
            {list.map((item) => (
              <Col md={4} key={item._id}>
                <Card style={{ width: "18rem" }}>
                  <Card.Img
                    variant="top"
                    src="https://icons.iconarchive.com/icons/dakirby309/simply-styled/128/Adobe-After-Effects-icon.png"
                  />
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>{item.description}</Card.Text>
                    <Link to="/edit">
                      <Button variant="primary">Editar</Button>
                    </Link>
                    <Button
                      variant="danger"
                      onClick={() => handleDelete(item._id)}
                    >
                      Eliminar
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Read;
