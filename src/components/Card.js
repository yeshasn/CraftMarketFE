import React from "react";
import styled from "styled-components";
function Card({ title, imageUrl, price, desc, phone, name }) {
  //   const [{ basket }, dispatch] = useStateValue();
  //   console.log("basket >>>>", basket);
  //   const addToBasket = (e) => {
  //     e.preventDefault();

  //     dispatch({
  //       type: "ADD_TO_BASKET",
  //       item: {
  //         id,
  //         title,
  //         price,
  //         image,
  //         rating,
  //       },
  //     });
  //   };

  return (
    <Container>
      <Image>
        <img src={imageUrl} alt="" />
      </Image>
      <Description>
        <h3>{title}</h3>
        <p>{desc}</p>
        <p>${price}</p>
        <p>Seller Name: {name}</p>
        <p>Seller Phone Number: {phone}</p>
      </Description>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  background-color: #fff;
  z-index: 10;
`;
const Image = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  padding-bottom: 1rem;

  justify-content: center;
  align-items: center;
  margin-top: 20px;
  flex: 0.3;
  img {
    width: 180px;
    height: 200px;
  }
`;
const Description = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  flex: 0.7;

  h5 {
    font-size: 16px;
    font-weight: 600;
  }

  p {
    font-weight: 400;
  }

  button {
    width: 100%;
    height: 33px;
    background-color: #fa8900;
    border: none;
    border-radius: 10px;
    cursor: pointer;
  }
`;
export default Card;
