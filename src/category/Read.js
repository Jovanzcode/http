import { useEffect, useState } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import CategoryCard from "../category/CategoryCard";

const axios = require("axios").default;

const Read = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    findAll();
  }, []);

  const findAll = () => {
    axios
      .get("http://192.168.0.17:3000/categories")
      .then(function (response) {
        setList(response.data.body);
      })
      .catch(function (error) {
        //console.log(error);
      });
  };

  const handleDelete = (id) => {
    axios
      .delete("http://192.168.0.17:3000/category/" + id)
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
            <h1 className="text-center">Category</h1>
            <Link to="/add-category">
              <Button variant="primary">Agregar</Button>
            </Link>
            <hr />
            {list.map((item) => (
              <Col md={4} key={item._id}>
                <CategoryCard
                  isCategory={true}
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
