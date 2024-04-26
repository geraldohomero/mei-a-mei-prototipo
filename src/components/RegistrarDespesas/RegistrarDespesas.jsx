import React from 'react'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';


const RegistrarDespesas = () => {
  return (
    <>
      <div>
        <h3>Registre uma despesa</h3>
      </div>
      <div>
        <Row className="g-2">
          <Col md>
            <FloatingLabel controlId="floatingInputGrid" label="Despesa com...">
              <Form.Control type="despesa" placeholder="" />
            </FloatingLabel>
          </Col>
          <Col md>
            <FloatingLabel
              controlId="floatingSelectGrid"
              label="Categoria"
            >
              <Form.Select aria-label="Floating label select example">
                <option value="1">Categorias</option>
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
          <Col>
          </Col>
        </Row>
        <Row className='g-2 mt-1'>
          <Col md='auto'><FloatingLabel controlId="floatingPassword" label="R$">
            <Form.Control type="monetary" placeholder="Valor" />
          </FloatingLabel></Col>
        </Row>
        <Button variant="danger mt-3">Adicionar despesa</Button>{' '}
      </div>
    </>
  )
}

export default RegistrarDespesas