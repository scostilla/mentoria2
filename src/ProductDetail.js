import React from "react";
import "./Checkout.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { useLocation } from 'react-router-dom'

function ProductDetail() {
  let { search } = useLocation();
  let query = new URLSearchParams(search);
  const id = query.get("id");
  const title = query.get("title");
  const image = query.get("image");
  const price = query.get("price");
  const rating = query.get("rating");
  

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />

        <div>
          <h2 className="checkout__title">Product Details</h2>

          <CheckoutProduct
              id={id}
              title={title}
              image={image}
              price={price}
              rating={rating}
              hideButton={true}
            /> 
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
