import { useEffect, useState } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
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
        setList(response.data.body);
      })
      .catch(function (error) {
        //console.log(error);
      });
  };
  const handleCart = (data) => {
    axios.post("http://192.168.0.17:3000/cart", data).then(() => {
      window.location.href = "/";
    });
  };
  const handleDelete = (id) => {
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
            <h1 className="text-center">Products</h1>
            <Link to="/add">
              <Button variant="primary">Agregar</Button>
            </Link>
            <hr />
            {list.map((item) => (
              <Col md={4} key={item._id}>
                <ProductCard
                  item={item}
                  handleDelete={handleDelete}
                  handleCart={handleCart}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Read;
