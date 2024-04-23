import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ProgressBar from 'react-bootstrap/ProgressBar';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import { useState } from 'react';

import './faturamento.css'

const Faturamento = () => {
  const [now, setNow] = useState(0)
  let progress = '';
  if (now >= 80) {
    progress = 'danger';
  } else if (now >= 60) {
    progress = 'warning';
  } else {
    progress = '';
  }
  return (
    <Container fluid className='w-75 mt-3 bg-light'>
      <Row>
        <Col className='border border-warning p-3 m-3'>
          <div className='d-flex justify-content-between'>
            <h3>Seu Faturamento</h3>
            <div>
              <Button variant="dark">MÊS</Button>{' '}
              <Button variant="dark">ANO</Button>
            </div>
          </div>
          <div className=''>
            <h3>R$<span className='span-value px-3'>1.025,70</span></h3>
          </div>

        </Col>
        <Col className='border border-warning p-3 m-3'>
          <div className='d-flex justify-content-between p-1'>
            <h3>Faturamento Permitido</h3>
            <div>
              <Button variant="dark">MÊS</Button>{' '}
              <Button variant="dark">ANO</Button>{' '}
              <Button onClick={() => setNow(now+5)} variant="secondary">+</Button>{' '}
            </div>

          </div>
          <div className='py-3 m-auto'>
            <ProgressBar variant={progress} now={now} label={`${now}%`} />
            <p></p>
          </div>
        </Col>

      </Row>
      <Row>
        <Col className='border border-warning p-3 m-3 box'>
          <Row>
            <Col>
              <div className='a'>
                <h3>Registre uma venda</h3>
              </div>
              <div>
                <Row className="g-2">
                  <Col md>
                    <FloatingLabel controlId="floatingInputGrid" label="Venda de...">
                      <Form.Control type="venda" placeholder="name@example.com" />
                    </FloatingLabel>
                  </Col>
                  <Col md>
                    <FloatingLabel
                      controlId="floatingSelectGrid"
                      label="Produto/Serviço"
                    >
                      <Form.Select aria-label="Floating label select example">
                        <option value="1">Produto</option>
                        <option value="2">Serviço</option>
                      </Form.Select>
                    </FloatingLabel>
                  </Col>

                </Row>

                <Row className="g-2 mt-1">
                  <Col md>
                    <FloatingLabel controlId="floatingInputGrid" label="Data">
                      <Form.Control type="date" />
                    </FloatingLabel>
                  </Col>
                  <Col md>
                    <FloatingLabel
                      controlId="floatingSelectGrid"
                      label="Meio de pagamento"
                    >
                      <Form.Select aria-label="Floating label select example">
                        <option value="1">Dinheiro</option>
                        <option value="2">Cartão</option>
                        <option value="3">PIX</option>
                        <option value="4">Outro</option>
                      </Form.Select>
                    </FloatingLabel>
                  </Col>
                </Row>
                <Row className='g-2 mt-1'>
                  <Col md='auto'><FloatingLabel controlId="floatingPassword" label="R$">
                    <Form.Control type="monetary" placeholder="Valor" />
                  </FloatingLabel></Col>

                </Row>
                <Button variant="success mt-3">Adicionar</Button>{' '}
              </div>
            </Col>
            <Col><div className='b'>
              <h3>Histórico</h3>
              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>Data</th>
                    <th>Venda de...</th>
                    <th>Produto/Serviço</th>
                    <th>Valor</th>
                    <th>Meio de Pagmento</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>17/04</td>
                    <td>Lavagem de carro</td>
                    <td>Serviço</td>
                    <td>R$ 700,00</td>
                    <td>Dinheiro</td>
                  </tr>
                  <tr>
                    <td>22/04</td>
                    <td>Biscoito cx 100</td>
                    <td>Produto</td>
                    <td>R$ 225,70</td>
                    <td>Cartão</td>

                  </tr>
                  <tr>
                    <td>23/04</td>
                    <td>Volante</td>
                    <td>Produto</td>
                    <td>R$ 100,00</td>
                    <td>PIX</td>

                  </tr>
                </tbody>
              </Table>
            </div>
            </Col>
          </Row>

        </Col>
      </Row>
    </Container>
  )
}

export default Faturamento