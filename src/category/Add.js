import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
const axios = require("axios").default;

function AddCategory() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    axios.post("http://192.168.0.17:3000/category", data).then(() => {
      window.location.href = "/categories";
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
        <br />

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

export default AddCategory;
// <Form.Control defaultValue="0" {...register("price")} type="Number" />
