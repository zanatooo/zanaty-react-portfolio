import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import emailjs from 'emailjs-com';

function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;


  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_h31a4gn', 'template_vhdmyq7', e.target, 'oWZZlSrtbtAVYBNnS')
      .then((result) => {
        console.log(result.text);
        setErrorMessage('Thank you I will get back to you shortly');
      }, (error) => {
        console.log(error.text);
      });
  }

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`Your ${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }

  }


  return (
    // <container className="section">
    //   <div style={{ display: 'flex', justifyContent: 'center', }}>

        <div class="Contactcard-content" style={{ display: 'flex', justifyContent: 'center', }}>
         <div>
          <h1 data-testid="h1tag">Contact Me</h1>

          <div class="ContactContent" style={{ display: 'flex', justifyContent: 'center', }}>
            <form  id="contact-form" onSubmit={sendEmail} style={{ display: 'flex',  justifyContent: 'center', alignItems: 'start', flexDirection: 'column', alignContent: 'stretch', flexGrow: '4' }}>
              <div class="control has-icons-left ">
                <input class="input is-medium" type="text" name="name" defaultValue={name} onBlur={handleChange} placeholder="Name" />
                <span class="icon is-small is-left">
                  <i class="fas fa-user"></i>
                </span>
              </div>
              <div class="control has-icons-left ">
                <input class="input is-medium" type="email" name="email" defaultValue={email} onBlur={handleChange} placeholder="Email"></input>
                <span class="icon is-small is-left">
                  <i class="fas fa-envelope"></i>
                </span>
              </div>
              <div class="control has-icons-left " >
                <textarea class="textarea is-large" name="message" rows="5" defaultValue={message} onBlur={handleChange} placeholder="Send Me A Message" />
              </div>
              {errorMessage && (
                <div>
                  <p className="error-text">{errorMessage}</p>
                </div>
              )}
              <button data-testid="button" type="submit" class="button is-light">Submit</button>
            </form>
          </div>
        </div>

      </div>
    // </container>
  );
}

export default Contact;
