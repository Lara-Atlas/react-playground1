import React from "react";
import ProductCard from "./ProductCard";

export default function App() {
  const products = [
    {
      name: "Kaffeemaschine",
      price: 89.99,
      description: "Eine moderne Kaffeemaschine mit Timer.",
    },
    {
      name: "Bluetooth-Lautsprecher",
      price: 45.0,
      description: "Kompakter Lautsprecher mit gutem Klang.",
    },
    {
      name: "USB-C Ladegerät",
      price: 19.99,
      description: "Schnelles Ladegerät für alle Geräte.",
    },
  ];

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>Produktkatalog</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {products.map((product, index) => (
          <ProductCard
            key={index}
            name={product.name}
            price={product.price}
            description={product.description}
          />
        ))}
      </div>
    </div>
  );
}
