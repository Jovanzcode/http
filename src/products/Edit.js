import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Button, Form, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const axios = require("axios").default;

function Edit() {
  const {
    setValue,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { id } = useParams();

  useEffect(() => {
    axios
      .get("http://192.168.0.17:3000/product/" + id)
      .then(function (response) {
        let body = response.data.body;
        onFillBody(body);
      })
      .catch(function (error) {});
  }, [id]);

  const onFillBody = (body) => {
    setValue("_id", body._id);
    setValue("name", body.name);
    setValue("description", body.description);
    setValue("category", body.category);
    setValue("price", body.price);
    setValue("img", body.img);
  };

  const onSubmit = (data) => {
    axios.put("http://192.168.0.17:3000/product", data).then(() => {
      window.location.href = "/";
    });
  };
  return (
    <>
      <h1>Product id: {id}</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Form.Control
          defaultValue=""
          {...register("name")}
          type="text"
          placeholder="name"
        />
        <br />
        <Form.Control
          defaultValue=""
          {...register("description")}
          type="text"
          placeholder="description"
        />
        <br />
        <Form.Control
          defaultValue=""
          {...register("img")}
          type="text"
          placeholder="product Imagen"
        />
        <br />
        <Form.Control
          defaultValue=""
          {...register("category")}
          type="text"
          placeholder="Category"
        />
        <Form.Control defaultValue="0" {...register("price")} type="text" />
        <Button variant="primary" type="submit">
          Actualizar
        </Button>
        <Link to="/">
          <Button variant="primary">Back</Button>
        </Link>
      </form>
    </>
  );
}

export default Edit;
