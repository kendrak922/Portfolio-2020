import React from 'react';
import emailjs from 'emailjs-com';

const Contact = () =>{
    function sendEmail(e){
        e.preventDefault();

        emailjs.sendForm('service_g1jtpsq','template_cqlr5gl', e.target, 'user_6VjKYgMy0qW7vtiWTm04W')
        .then((result)=>{
            console.log(result.text);
    
        }, (error) => {
            console.log(error.text)
        });
    }
    return(
        <div className="contact-form" onSubmit={sendEmail}>
        <label>Name: <br></br>
        <input name="user_name" type="text" />
        </label>
        <label>Email:<br></br> 
        <input name="user_email" type="email" />
        </label>
        <label>Message: <br></br>
        <textarea name="message"  />
        </label>
        <input type="submit" value="send" className="submit" /> 
    </div>
    )
}

export default Contact;