//import React from 'react'
import Logo from '../../assets/Logo.svg'
import './home.css'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const Home = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <div className='logo'>
              <img src={Logo} />
            </div>
          </Col>
          <Col className='align-self-center'>
            <h1>Organize seu negócio!</h1>
            <h3>Registre e gerencie tudo com mais facilidade.</h3>
            <div className="mb-2 mt-4">
              <Button href="/login" className="btn-entrar" size="lg">
                Entrar
              </Button>{' '}
              <Button href="/registrar" className="btn-cadastrar" size="lg">
                Cadastrar
              </Button>
            </div>
          </Col>
        </Row>

      </Container>
    </>
  )

}

export default Home