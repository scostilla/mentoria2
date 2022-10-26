import React from "react";
import Header from "./Header";
import "./Product.css";
import { useStateValue } from "./StateProvider";
import Checkout from "./Checkout";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductDetail from "./ProductDetail";

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  const [getId, setId] = useStateValue();
  const [getTitle, setTitle] = useStateValue();
  const [getImage, setImage] = useStateValue();
  const [getPrice, setPrice] = useStateValue();
  const [getRating, setRating] = useStateValue();

  const setDetails = () => {
    setId(id);
    setTitle(title);
    setImage(image);
    setPrice(price);
    setRating(rating);
  };

  const addToBasket = () => {
    // dispatch the item into the data layer
    alert("Product added To Basket");
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
    return <Checkout product={dispatch} />;
  };

  return (
    <div className="product">
      <div className="product__info">
          <div>
            <Link to="./ProductDetail">
              <p onMouseEnter={setDetails}>{title}</p>
            </Link>
          </div>

        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
      </div>

      <img src={image} alt="" />

      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
