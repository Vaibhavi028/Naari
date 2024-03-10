import React from "react";
import "./marketplace.css";
import Mug from "./img/mug.jpeg";
import Scarf from "./img/scarf.jpeg";
import Soap from "./img/soap.jpeg";
import Jour from "./img/jour.jpeg";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  sellerName: string;
  location: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Handmade Clay Mug",
    description:
      "A beautiful mug handcrafted from natural clay. Perfect for your morning coffee or tea.",
    price: 20,
    imageUrl: Mug,
    sellerName: "John Doe",
    location: "Chennai, India",
  },
  {
    id: 2,
    name: "Vintage Leather Journal",
    description:
      "A timeless leather journal for capturing your thoughts and ideas.",
    price: 35,
    imageUrl: Jour,
    sellerName: "Savitri",
    location: "Ratnagiri, Maharashtra",
  },
  {
    id: 3,
    name: "Hand-knitted Scarf",
    description: "A cozy and stylish scarf, perfect for the colder months.",
    price: 18,
    imageUrl: Scarf,
    sellerName: "Mary Robbins",
    location: "Wayanad, Kerela",
  },
  {
    id: 4,
    name: "Organic Soap Bar",
    description: "A natural and nourishing soap bar for pampering your skin.",
    price: 12,
    imageUrl: Soap,
    sellerName: "Savitri",
    location: "Ratnagiri, Maharashtra",
  },
  {
    id: 1,
    name: "Handmade Clay Mug",
    description:
      "A beautiful mug handcrafted from natural clay. Perfect for your morning coffee or tea.",
    price: 20,
    imageUrl: Mug,
    sellerName: "John Doe",
    location: "Chennai, India",
  },
  {
    id: 2,
    name: "Vintage Leather Journal",
    description:
      "A timeless leather journal for capturing your thoughts and ideas.",
    price: 35,
    imageUrl: Jour,
    sellerName: "Savitri",
    location: "Ratnagiri, Maharashtra",
  },
  {
    id: 3,
    name: "Hand-knitted Scarf",
    description: "A cozy and stylish scarf, perfect for the colder months.",
    price: 18,
    imageUrl: Scarf,
    sellerName: "Mary Robbins",
    location: "Wayanad, Kerela",
  },
  {
    id: 4,
    name: "Organic Soap Bar",
    description: "A natural and nourishing soap bar for pampering your skin.",
    price: 12,
    imageUrl: Soap,
    sellerName: "Savitri",
    location: "Ratnagiri, Maharashtra",
  },
];

const Marketplace = () => {
  return (
    <div className="marketplace">
      <header className="header">
        <h1>Marketplace</h1>
      </header>
      <main className="main">
        <ul className="product-list">
          {products.map((product) => (
            <li key={product.id} className="product-item">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="product-image"
              />
              <div className="product-info">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <div className="product-details">
                  <span className="price">₹{product.price}</span>
                  <span className="seller">
                    by {product.sellerName} ({product.location})
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default Marketplace;
