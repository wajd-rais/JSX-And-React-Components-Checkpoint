import React from "react";
import { Card } from "react-bootstrap";
import Price from "./Price";
import Description from "./Description";
import Image from "./Image";
import product from "./product";
import "./App.css"; 

const App = () => {
  const firstName = "Farhat"; 
  const greeting = firstName ? `Hello, ${firstName}!` : "Hello, there!";

  return (
    <div className="app">
      <Card className="product-card">
        <Card.Img variant="top" src={product.image} />
        <Card.Body>
          <Price price={product.price} />
          <Card.Title style={{fontSize:"30px"}}>{product.name}</Card.Title>
          <Description description={product.description} />
        </Card.Body>
      </Card>
      <p>{greeting}</p>
      {firstName && <Image image={product.image} />}
    </div>
  );
};

export default App;
