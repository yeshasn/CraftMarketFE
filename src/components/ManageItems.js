import React, { Component, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./navbar";
import { useLocation } from "react-router-dom";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./TableStyles.css";

const ManageItems = () => {
  const location = useLocation();
  const { data } = location.state;

  console.log("userData in manage items:", data);
  const [products, setProducts] = useState([]);

  const loggedInName = data.name;

  useEffect(() => {
    fetch("http://localhost:5005/products/get", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data, "userProductData");
        setProducts(data.data);
      });
  }, []);

  const deleteItem = (id, title) => {
    if (window.confirm(`Are you sure you want to remove ${title}?`)) {
      fetch("http://localhost:5005/delete-item", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          itemId: id,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          alert(data.data);
        });
    } else {
    }
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          minHeight: "300vh",
          padding: "20px",
        }}
      >
        {/* <Navbar /> */}
        <div style={{ maxWidth: "800px", width: "100%", marginTop: "100px" }}>
          <h1 style={{ marginBottom: "50px" }}>Your items</h1>
          <table style={{ width: "100%", textAlign: "center" }}>
            <tr>
              <th>Item Name</th>
              <th>Item Price</th>
            </tr>
            {products.map((prod, index) => {
              if (prod.name === loggedInName) {
                return (
                  <tr>
                    <td>{prod.title}</td>
                    <td>{prod.price}</td>
                    <td>
                      <FontAwesomeIcon
                        icon={faTrash}
                        onClick={() => deleteItem(prod._id, prod.title)}
                      />
                    </td>
                  </tr>
                );
              }
            })}
          </table>
        </div>
        <Button as={Link} to="/home">
          Back to home
        </Button>
      </div>
    </>
  );
};

const Button = styled.button`
  width: 25%;
  height: 35px;
  background-color: #f3b414;
  border: none;
  outline: none;
  border-radius: 10px;
  margin-top: 100px;
`;

export default ManageItems;
