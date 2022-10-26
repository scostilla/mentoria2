import React from "react";
import "./Checkout.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function ProductDetail({ id, title, image, price, rating }) {
  const [{ basket, user }, dispatch] = useStateValue();
  /* {dispatch(product)}; */
  console.log(id, title, image, price, rating);

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
          {/* {basket.map(item => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
              hideButton={true}
            />
          ))} */}
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
