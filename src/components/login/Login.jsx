import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
//import './login.css'

const Login = () => {
    return (
        <>
            <Form className='form-width m-auto py-5'>
                <h2>Login</h2>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>E-mail</Form.Label>
                    <Form.Control type="email" placeholder="nome@email.com" />
                    
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Senha</Form.Label>
                    <Form.Control type="password" placeholder="Senha" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Entrar
                </Button>
                <p className="mt-3"> <a className="link-opacity-100" href="/recuperar">Esqueci a senha</a></p>
            </Form>
        </>
    )
}

export default Login