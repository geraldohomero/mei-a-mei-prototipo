import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import './faturamento.css'
import RegistrarVendas from '../RegistrarVendas/RegistrarVendas';
import RegistrarDespesas from '../RegistrarDespesas/RegistrarDespesas';
import GraficoMes from '../Graficos/GraficoMes';
import GraficoAno from '../Graficos/GraficoAno';

const Faturamento = () => {
  return (
    <Container fluid className='w-75 mt-3 bg-light'>
      <Row>
        <Col className='border border-warning p-3 m-3'>
          <Row>

            <div className='d-flex justify-content-between'>
              <h3 className=''>Seu Faturamento</h3>
              <div>
                <Button variant="dark">MÊS</Button>{' '}
                <Button variant="dark">ANO</Button>
              </div>
            </div>
            <Col>
              <div>
                <h3>R$<span className='valor-receita p-3 text-success'>1.025,70</span></h3>
              </div>
            </Col>
          </Row>
        </Col>
        <Col className='border border-warning p-3 m-3'>
          <div className='d-flex justify-content-between'>
            <h3>Suas Despesas</h3>
            <div>
              <Button variant="dark">MÊS</Button>{' '}
              <Button variant="dark">ANO</Button>{' '}
            </div>
          </div>
          <div>
            <h3>R$<span className='valor-receita p-3 text-danger'>800,70</span></h3>
          </div>
        </Col>
      </Row>
      <Row>
        <div className='py-3 m-auto'>
          <ProgressBar variant={'danger'} now={80} label={`${80}%`} />
          <p></p>
        </div>
      </Row>
      <Row>
        <Col className='border border-warning p-3 m-3 box'>
          <Row>
            <Tabs
              defaultActiveKey="venda"
              id="uncontrolled-tab-example"
              className="mb-3"
            >
              <Tab eventKey="venda" title="Vendas">
                <RegistrarVendas />
              </Tab>
              <Tab eventKey="despesas" title="Despesas">
                <RegistrarDespesas />
              </Tab>
            </Tabs>
          </Row>
        </Col>
      </Row>
      {/* Gráficos de despesas e receitas  */}
      <Row>
        <Col className='border border-warning p-3 m-3'>
          <div className='d-flex justify-content-between'>
            <GraficoMes className='border border-warning p-3 m-3' />
            <GraficoAno className='border border-warning p-3 m-3' />
          </div>
        </Col>
      </Row>

    </Container >
  )
}

export default Faturamento