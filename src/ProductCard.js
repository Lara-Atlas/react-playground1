import react from "react";

export default function ProductCard({ name, price, description }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "10px",
        margin: "10px",
        maxWidth: "250px",
      }}
    >
      <h3>{name}</h3>
      <p>
        <strong>Preis:</strong> {price.toFixed(2)} €
      </p>
      <p>{description}</p>
    </div>
  );
}
