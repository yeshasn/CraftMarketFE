import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./navbar";
import { useLocation } from "react-router-dom";

function AddProduct() {
  const location = useLocation();
  const { data } = location.state;

  console.log("userData in AddProduct:", data);
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [price, setPrice] = useState("");
  const [desc, setDesc] = useState("");
  //   const phone = "";
  const phone = data.phone;
  const name = data.name;

  const addProduct = (e) => {
    e.preventDefault();
    console.log(title, imageUrl, price, desc, phone, name);
    fetch("http://localhost:5005/products/add", {
      method: "POST",
      mode: "cors",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        title,
        imageUrl,
        price,
        desc,
        phone,
        name,
      }),
    })
      .then(() => {
        setTitle("");
        setImageUrl("");
        setPrice("");
        setDesc("");
      })
      .catch((error) => alert(error.message));
  };
  return (
    <Container>
      {/* <Navbar> </Navbar> */}
      <FormContainer>
        <h3 style={{ textAlign: "center" }}>Add Your Product Details!</h3>

        <InputContainer>
          <p>Item Name</p>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </InputContainer>
        <InputContainer>
          <p>Item Image URL</p>
          <input
            type="text"
            onChange={(e) => setImageUrl(e.target.value)}
            value={imageUrl}
          />
        </InputContainer>
        <InputContainer>
          <p>Item Price</p>
          <input
            type="text"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          />
        </InputContainer>
        <InputContainer>
          <p>Description</p>
          <input
            type="text"
            onChange={(e) => setDesc(e.target.value)}
            value={desc}
          />
        </InputContainer>

        <Button onClick={addProduct}>Add Product</Button>
        <Button as={Link} to="/home">
          Back to home
        </Button>
      </FormContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 40%;
  min-width: 450px;
  height: fit-content;
  padding-top: 5rem;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.div`
  width: 120px;
  margin-bottom: 20px;
  img {
    width: 100%;
  }
`;

const FormContainer = styled.form`
  border: 1px solid lightgray;
  width: 55%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px;

  h3 {
    font-size: 28px;
    font-weight: 400;
    line-height: 33px;
    align-self: flex-start;

    margin-bottom: 10px;
  }
`;

const InputContainer = styled.div`
  width: 100%;
  padding: 10px;

  p {
    font-size: 14px;
    font-weight: 600;
  }

  input {
    width: 95%;
    height: 33px;
    padding-left: 5px;
    border-radius: 5px;
    border: 1px solid lightgray;
    margin-top: 5px;

    &:hover {
      border: 1px solid orange;
    }
  }
`;

const Button = styled.button`
  width: 70%;
  height: 35px;
  background-color: #f3b414;
  border: none;
  outline: none;
  border-radius: 10px;
  margin-top: 30px;
`;

export default AddProduct;
