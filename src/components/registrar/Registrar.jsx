import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './registrar.css'

function Registrar() {
  return (
    <Form className='form-width m-auto py-5'>
      <h2>Faça seu cadastro!</h2>

      <Form.Group className="mb-3" controlId="formBasicNome">
        <Form.Label>Nome</Form.Label>
        <Form.Control type="password" placeholder="Seu nome" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>E-mail</Form.Label>
        <Form.Control type="email" placeholder="nome@email.com" />
        <Form.Text className="text-muted">
          Nós nunca compartilharemos seu e-mail.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Senha</Form.Label>
        <Form.Control type="password" placeholder="Senha" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCnpj">
        <Form.Label>CNPJ</Form.Label>
        <Form.Control type="text" placeholder="CNPJ" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Enviar
      </Button>
    </Form>
  );
}

export default Registrar;