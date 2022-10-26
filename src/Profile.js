import React from "react";
import "./Checkout.css";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Profile() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div>
      <div className="payment">
        <div className="payment__container">
          <h1>User Profile</h1>
          <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Username</h3>
                    </div>
                    <div className='payment__address'>
                        <p>{user?.email}</p>
                    </div>
                </div>
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Address</h3>
                    </div>
                    <div className='payment__address'>
                        <p>123 React Lane</p>
                    </div>
                </div>
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>City</h3>
                    </div>
                    <div className='payment__address'>
                        <p>Los Angeles, CA</p>
                    </div>
                </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
