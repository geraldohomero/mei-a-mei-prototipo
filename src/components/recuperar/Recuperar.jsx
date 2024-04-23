import React from 'react'
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import './recuperar.css'

const Recuperar = () => {
  return (
    <>
      <Form className='form-width m-auto'>
        <h2 className="mt-5">Recuperação de conta</h2>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Digite seu e-mail para recuperação de conta</Form.Label>
          <Form.Control type="email" placeholder="nome@email.com" />
          <Button className="mt-3" variant="primary" type="submit">
          Recuperar
        </Button>
        </Form.Group>
        
        <Form.Text id="passwordHelpBlock" muted>
          Caso seja um e-mail válido e cadastrado no nosso sistema, chegará uma nova senha.
        </Form.Text>
        
      </Form>


    </>
  )
}

export default Recuperar