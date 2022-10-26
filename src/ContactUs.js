import React, { useState } from 'react';
import './Login.css'
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function ContactUs() {
    const history = useHistory();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');


    const sendForm = e => {
        e.preventDefault();

        alert("Nombre: "+firstName+" - Apellido: "+lastName+" - Correo: "+email+" - Mensaje: "+message);
    }


    return (
        <div className='login'>
            <Link to='/'>
                <img
                    className="login__logo"
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' 
                />
            </Link>

            <div className='login__container'>
                <h1>Contact Us</h1>

                <form>
                    <h5>First Name</h5>
                    <input type='text' value={firstName} onChange={e => setFirstName(e.target.value)} />

                    <h5>Last Name</h5>
                    <input type='text' value={lastName} onChange={e => setLastName(e.target.value)} />

                    <h5>E-Mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Message</h5>
                    <textarea value={message} onChange={e => setMessage(e.target.value)} />

                    
                    <button type='submit' onClick={sendForm} className='login__signInButton'>Send Message</button>
                </form>
            </div>
        </div>
    )
}

export default ContactUs
