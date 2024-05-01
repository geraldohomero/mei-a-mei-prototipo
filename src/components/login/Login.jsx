import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            // Faz a autenticação usando o e-mail e a senha do usuário
            const authResponse = await fetch('http://localhost:5062/api/Usuarios/authenticate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    senha: password
                })
            });

            if (!authResponse.ok) {
                throw new Error('Erro na autenticação');
            }

            const data = await authResponse.json();
            const token = data.jwtToken;
            console.log('Token JWT via E-mail: ' + token);

            if (!token) {
                throw new Error('Token não encontrado');
            }

        } catch (error) {
            console.error('Erro ao fazer login', error);
        }
    };

    return (
        <>
            <Form className='form-width m-auto py-5' onSubmit={handleSubmit}>
                <h2>Login</h2>
                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="email@email.com.br" onChange={e => setEmail(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Senha</Form.Label>
                    <Form.Control type="password" placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)} />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={handleSubmit}>
                    Entrar
                </Button>
                <p className="mt-3"> <a className="link-opacity-100" href="/recuperar">Esqueci a senha</a></p>
            </Form>
        </>
    );
};

export default Login;