import { useEffect, useState } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import ProductCard from "../products/ProductCard";
const axios = require("axios").default;

const Read = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    findAll();
  }, []);

  const findAll = () => {
    axios
      .get("http://192.168.0.17:3000/cart")
      .then(function (response) {
        setList(response.data.body);
      })
      .catch(function (error) {
        //console.log(error);
      });
  };

  const handleDelete = (id) => {
    axios
      .delete("http://192.168.0.17:3000/cart/" + id)
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
            <h1 className="text-center">Cart</h1>
            <hr />
            {list.map((item) => (
              <Col md={4} key={item._id}>
                <ProductCard
                  isCart={true}
                  item={item}
                  handleDelete={handleDelete}
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
