import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Button, Form, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const axios = require("axios").default;

function EditCategory() {
  const {
    setValue,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { id } = useParams();

  useEffect(() => {
    axios
      .get("http://192.168.0.17:3000/category/" + id)
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
    setValue("img", body.img);
  };

  const onSubmit = (data) => {
    axios.put("http://192.168.0.17:3000/category", data).then(() => {
      window.location.href = "/categories";
    });
  };
  return (
    <>
      <h1>Product id: {id}</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Form.Control
          className={
            errors.name?.type === "required" ? "onErrorField" : "onOKField"
          }
          defaultValue=""
          {...register("name", { required: true, minLength: 5 })}
          type="text"
          placeholder="Category name"
        />
        {errors.name?.type === "required" && "Name is required"}
        <br />
        <br />
        <Form.Control
          defaultValue=""
          {...register("description", { required: true, maxLength: 20 })}
          type="text"
          placeholder="Category Description"
        />
        <br />
        <Form.Control
          defaultValue=""
          {...register("img", { required: true })}
          type="text"
          placeholder="Img URL"
        />
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

export default EditCategory;
