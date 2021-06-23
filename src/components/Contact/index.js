import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {validateEmail} from '../../utils/helper';


function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const { name, email, message } = formState;
  const [errorMessage, setErrorMessage] = useState('');

  function handleChange(e) {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      console.log(isValid);
      // isValid conditional statement
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    console.log(`${e.target.name}`);
    console.log('errorMessage', errorMessage);
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }

  //JSX
  
    // <section>
      
    //   <form >
    //     <div>
    //       <label htmlFor="name">Name:</label>
    //       <input type="text" defaultValue={name} onBlur={handleChange} name="name" />
    //     </div>
    //     <div>
    //       <label htmlFor="email">Email address:</label>
    //       <input type="email" defaultValue={email} onBlur={handleChange} name="email" />
    //     </div>
    //     <div>
    //       <label htmlFor="message">Message:</label>
    //       <textarea name="message" defaultValue={message} onBlur={handleChange} rows="5" />
    //     </div>
    //     {errorMessage && (
    //       <div>
    //         <p className="error-text">{errorMessage}</p>
    //       </div>
    //     )}
    //     <button  type="submit">Submit</button>
    //   </form>
    // </section>
  return (
    < Form id="contact-form" onSubmit={handleSubmit} >
      <Form.Group>
        <Form.Label className="text-primary" htmlFor="name">Name</Form.Label>
        <Form.Control type="text" defaultValue={name}  onBlur={handleChange} />
        </Form.Group>
      <Form.Group>
        <Form.Label className="text-primary" htmlFor="email">Email address</Form.Label>
        <Form.Control type="email" defaultValue={email}  onBlur={handleChange} />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

      <Form.Group>
        <Form.Label className="text-primary" htmlFor="message">Message</Form.Label>
        <Form.Control as="textarea" defaultValue={message} rows={10} onBlur={handleChange} />
        {errorMessage && (
          <Form.Text className="text-danger error-text">
      {errorMessage}
    </Form.Text>
        )}
      </Form.Group>
      <Button data-testid="contactbutton" variant="warning" type="submit">
    Submit
  </Button>
</Form >

  )
}
export default ContactForm;