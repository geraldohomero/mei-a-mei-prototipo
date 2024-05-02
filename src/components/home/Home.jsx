//import React from 'react'
import Logo from '../../assets/Logo.svg'
import './home.css'
import { Container, Row, Col, Button } from 'react-bootstrap';
import PlayStoreLogo from '../../assets/google-play-badge.png';
import AppleStoreLogo from '../../assets/apple-store-logo.png';

const Home = () => {
  return (
    <>
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <div className='logo'>
              <img src={Logo} alt="Logo" />
            </div>
          </Col>
          <Col xs={12} md={6} className='align-self-center text-center'>
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
        <Row className="mt-5" >
          <Col xs={12} md={3} className="stores text-center">
            <a href="https://play.google.com/store/apps/details?id=com.example.app" target="_blank" rel="noopener noreferrer">
              <img src={PlayStoreLogo} alt="Download na Play Store" className="store-logo" />

            </a>
            <a href="https://apps.apple.com/app/id123456789" target="_blank" rel="noopener noreferrer" >
              <img src={AppleStoreLogo} alt="Download na Apple Store" className="store-logo" />

            </a>
          </Col>
          <Col xs={12} md={6} className='align-self-center text-center sobre'>
            <h2>Sobre o MEI a MEI</h2>
            <p>É um aplicativo e website permitem aos empresários que usam MEI acompanhar suas finanças para que não ultrapassem o
              limite definido por lei para a categoria. Com ele, você pode registrar e gerenciar todas as suas transações financeiras,
              tornando mais fácil manter-se dentro do limite de receita bruta anual.</p>
            <p>Você também pode usar o aplicativo pelo website ou baixá-lo para seu dispositivo móvel</p>
          </Col>
        </Row>
        <Row className="mt-5 mb-5" >
          <Col xs={20} className="text-center mb-5">
            <h1>Funcionalidades</h1>
          </Col>
          <Col xs={12} md={4} className="mt-3 text-center">
            <h3>Gerenciamento Financeiro</h3>
            <p>Registre e gerencie todas as suas transações financeiras de forma fácil e intuitiva.</p>
            <img src="https://via.placeholder.com/150x300" alt="Imagem placeholder" />
          </Col>
          <Col xs={12} md={4} className="mt-3 text-center">
            <h3>Acompanhamento de Limites</h3>
            <p>Acompanhe suas finanças para garantir que você não ultrapasse o limite definido por lei para a categoria MEI.</p>
            <img src="https://via.placeholder.com/150x300" alt="Imagem placeholder" />
          </Col>
          <Col xs={12} md={4} className="mt-3 text-center">
            <h3>Multiplataforma</h3>
            <p>Use o aplicativo pelo website ou baixá-lo para seu dispositivo móvel.</p>
            <img src="https://via.placeholder.com/150x300" alt="Imagem placeholder" />
          </Col>
        </Row>

      </Container >
    </>
  )
}

export default Home;