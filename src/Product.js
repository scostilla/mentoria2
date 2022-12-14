import React, { useState } from "react";
import Header from "./Header";
import "./Product.css";
import { useStateValue } from "./StateProvider";
import Checkout from "./Checkout";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductDetail from "./ProductDetail";

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const [getUrl, setUrl] = useState();

  const setDetails = () => {
    setUrl(
      "/ProductDetail/?id=" +
        id +
        "&title=" +
        title +
        "&image=" +
        image +
        "&price=" +
        price +
        "&rating=" +
        rating
    );
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
          <Link to={getUrl}>
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

      {/* <img  src={image} alt="" onMouseEnter={setDetails}/> */}
      <Link to={getUrl}>
        <img
          width="50%"
          max-height="200px"
          src={image}
          alt=""
          onMouseEnter={setDetails}
        />
      </Link>

      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
