import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Form, Nav } from "react-bootstrap";
const axios = require("axios").default;

function Add() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    axios.post("http://192.168.0.17:3000/product", data).then();
  };

  return (
    <>
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
        <Form.Control defaultValue="0" {...register("price")} type="text" />
        <Button variant="primary" type="submit">
          Agregar
        </Button>
      </form>
    </>
  );
}

export default Add;
