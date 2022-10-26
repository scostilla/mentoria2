import React from "react";
import "./Checkout.css";
import './Payment.css';
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";


function Profile() {
    const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div>
          <h2 className="checkout__title">User Profile</h2>
          <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Delivery Address</h3>
                    </div>
                    <div className='payment__address'>
                        <p>{user?.email}</p>
                        <p>123 React Lane</p>
                        <p>Los Angeles, CA</p>
                    </div>
                </div>
    </div>
  );
}

export default Profile;
