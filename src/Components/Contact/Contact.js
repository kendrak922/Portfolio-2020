import React from 'react';
import emailjs from 'emailjs-com';
// import Modal from '../Modal/Modal'
import './contact.scss'

const Contact = () => {
        function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('service_g1jtpsq', 'template_cqlr5gl', e.target, 'user_6VjKYgMy0qW7vtiWTm04W')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text)
            });
        e.target.reset()
    }
    return (
        <div>
        <form className="contact-form form" onSubmit={sendEmail} >
            <label>Name
        <input htmlFor="name" name="user_name" type="text" />
            </label>
            <label>Email
        <input htmlFor="email" name="user_email" type="email" />
            </label>
            <label>Message
        <textarea htmlFor="message"name="message" rows="5" />
            </label>
            <input type="submit" value="send" className="submit" />
        </form>
        </div>
    )
}

export default Contact;