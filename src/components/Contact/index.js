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

  return (
    < Form id="contact-form" onSubmit={handleSubmit} >
      <Form.Group>
        <Form.Label className="text-primary" htmlFor="name">Name</Form.Label>
        <Form.Control type="text" defaultValue={name} name="Name"  onBlur={handleChange} />
        </Form.Group>
      <Form.Group>
        <Form.Label className="text-primary" htmlFor="email">Email address</Form.Label>
        <Form.Control type="email" defaultValue={email} name="Email" onBlur={handleChange} />
    <Form.Text className="text-muted">
      All email addresses are kept confidential.
    </Form.Text>
  </Form.Group>

      <Form.Group>
        <Form.Label className="text-primary" htmlFor="message">Message</Form.Label>
        <Form.Control as="textarea" defaultValue={message} name="Message" rows={10} onBlur={handleChange} />
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