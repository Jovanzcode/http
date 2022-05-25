import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
const axios = require("axios").default;

function Add() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [category, setCategory] = useState([]);

  useEffect(() => {
    findCategory();
  }, []);
  const onSubmit = (data) => {
    console.log(data);
    axios.post("http://192.168.0.17:3000/product", data).then(() => {
      window.location.href = "/";
    });
  };

  const findCategory = () => {
    axios
      .get("http://192.168.0.17:3000/categories")
      .then(function (response) {
        setCategory(response.data.body);
      })
      .catch(function (error) {
        //console.log(error);
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Form.Control
          className={
            errors.name?.type === "required" ? "onErrorField" : "onOKField"
          }
          defaultValue=""
          {...register("name", { required: true, minLength: 5 })}
          type="text"
          placeholder="Product name"
        />
        {errors.name?.type === "required" && "Name is required"}
        <br />
        <br />
        <Form.Control
          defaultValue=""
          {...register("description", { required: true, maxLength: 20 })}
          type="text"
          placeholder="Product's Description "
        />
        <br />
        <Form.Control
          defaultValue=""
          {...register("img", { required: true })}
          type="text"
          placeholder="Product URL"
        />
        <br />

        <Form.Select
          {...register("categoryId")}
          aria-label="Default select example"
        >
          {category.map((el) => (
            <option value={el._id} key={el._id}>
              {el.name}
            </option>
          ))}
        </Form.Select>

        <br />
        <Form.Control defaultValue="0" {...register("price")} type="Number" />
        <Button variant="primary" type="submit">
          Agregar
        </Button>
        <Link to="/">
          <Button variant="primary">Back</Button>
        </Link>
      </form>
    </>
  );
}

export default Add;
