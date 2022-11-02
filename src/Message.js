import React from "react";
import "./Checkout.css";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import { useLocation } from 'react-router-dom'

function Message() {
  const [{ basket, user }, dispatch] = useStateValue();
  let { search } = useLocation();
  let query = new URLSearchParams(search);
  const firstName = query.get("firstName");
  const lastName = query.get("lastName");
  const email = query.get("email");
  const message = query.get("message");

  return (
    <div>
      <div className="payment">
        <div className="payment__container">
          <h1>Message Sent</h1>
          <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>First Name</h3>
                    </div>
                    <div className='payment__address'>
                        <p>{firstName}</p>
                    </div>
                </div>
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Last Name</h3>
                    </div>
                    <div className='payment__address'>
                        <p>{lastName}</p>
                    </div>
                </div>
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Email</h3>
                    </div>
                    <div className='payment__address'>
                        <p>{email}</p>
                    </div>
                </div>
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Message</h3>
                    </div>
                    <div className='payment__address'>
                        <p>{message}</p>
                    </div>
                </div>
        </div>
      </div>
    </div>
  );
}

export default Message;
