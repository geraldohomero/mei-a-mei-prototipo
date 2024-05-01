import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Login = () => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            // Faça a autenticação usando o ID e a senha do usuário
            const authResponse = await fetch('http://localhost:5062/api/Usuarios/authenticate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id: id, // substitua userId pelo ID do usuário
                    senha: password
                })
            });

            if (!authResponse.ok) {
                throw new Error('Erro na autenticação');
            }

            const data = await authResponse.json();
            const token = data.jwtToken;

            if (!token) {
                throw new Error('Token não encontrado');
            }

            // Armazene o token no local storage
            localStorage.setItem('jwtToken', token);

            // Redirecione o usuário para a página inicial
            //window.location.href = '/';
            console.log('Login efetuado com sucesso...jwtToken: ' + token);
        } catch (error) {
            console.error('Erro ao fazer login', error);
        }
    };

    return (
        <>
            <Form className='form-width m-auto py-5' onSubmit={handleSubmit}>
                <h2>Login</h2>
                <Form.Group className="mb-3">
                    <Form.Label>Id</Form.Label>
                    <Form.Control type="id" placeholder="numeros e letras" onChange={e => setId(e.target.value)} />
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