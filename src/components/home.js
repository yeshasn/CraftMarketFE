import React, { useState, useEffect } from "react";
// import { Card, Grid, Text, Link, Row } from "@nextui-org/react";
// import Text from "@nextui-org/react";
// import Card from "@nextui-org/react";
import "./CardStyles.css";
import Card from "./Card";
import Navbar from "./navbar";

const Home = () => {
  const [userData, setUserData] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5005/userData", {
      method: "POST",
      mode: "cors",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        token: window.localStorage.getItem("token"),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userData");
        setUserData(data.data);
      });

    fetch("http://localhost:5005/products/get", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data, "userProductData");
        setProducts(data.data);
      });
  }, []);

  return (
    <>
      <Navbar userPhone={userData} />
      <div className="work-container">
        <h1 className="project-heading">Welcome, {userData.name}!</h1>
        <div className="project-container">
          {products.map((prod, index) => {
            return (
              // <Card
              //   isHoverable
              //   variant="bordered"
              //   css={{ p: "$6", mw: "400px" }}
              // >
              //   <Card.Image src={prod.imageURL} objectFit="cover" />
              //   <Card.Header>
              //     <h2>{prod.title}</h2>
              //   </Card.Header>
              //   <Card.Body css={{ py: "$2" }}>
              //     <p>{prod.desc}</p>
              //     <p>{prod.price}</p>
              //     <p>{prod.phone}</p>
              //   </Card.Body>
              // </Card>
              <>
                <Card
                  title={prod.title}
                  imageUrl={prod.imageUrl}
                  price={prod.price}
                  desc={prod.desc}
                  phone={prod.phone}
                  name={prod.name}
                />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
