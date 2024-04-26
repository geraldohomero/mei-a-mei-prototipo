import React from 'react'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';


const RegistrarVendas = () => {
  return (
    <>
      <div>
        <h3>Registre uma venda</h3>
      </div>
      <div>
        <Row className="g-2">
          <Col md>
            <FloatingLabel controlId="floatingInputGrid" label="Venda de...">
              <Form.Control type="venda" placeholder="" />
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
          <Col md='auto'>
            <FloatingLabel controlId="floatingPassword" label="R$">
              <Form.Control type="monetary" placeholder="Valor" />
            </FloatingLabel>
          </Col>
        </Row>
        <Button variant="success mt-3">Adicionar venda</Button>{' '}
      </div>
    </>
  )
}

export default RegistrarVendas