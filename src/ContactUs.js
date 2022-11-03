import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";
import Message from "./Message";


function ContactUs() {
  const history = useHistory();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [getUrl, setUrl] = useState("");

  const [data, setData] = useState({
    firstName: '',
    lastName:'',
    email:'',
    message:''
  })

  const handleInputChange = (e) =>{
    setData({
      ...data,
      [e.target.name] : e.target.value
    })
    setUrl("/Message/?firstName="+data.firstName+"&lastName="+data.lastName+"&email="+data.email+"&message="+data.message);
  }

  const sendForm = (e) => {
    e.preventDefault();
    history.push(getUrl); 
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
        />
      </Link>

      <div className="login__container">
        <h1>Contact Us</h1>

        <form onSubmit={sendForm}>
          <h5>First Name</h5>
          <input
            type="text"
            onChange={handleInputChange}
            name="firstName"
            className="form-control"
            
          />

          <h5>Last Name</h5>
          <input
            type="text"
            name="lastName"
            onChange={handleInputChange}
          />

          <h5>E-Mail</h5>
          <input
            type="text"
            name="email"
            onChange={handleInputChange}
          />

          <h5>Message</h5>
          <textarea
            name="message"
            onChange={handleInputChange}
          />

  <Link to={getUrl}>
          <button
            type="submit"
            onClick={sendForm}
            className="login__signInButton"
          >
            Send Message
          </button></Link>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
