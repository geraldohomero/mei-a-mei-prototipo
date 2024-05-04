import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

const RegistrarClientes = () => {
  return (
    <>
      <div>
        <Row className="g-2 mb-3">
          <Col md>
            <FloatingLabel
              className="drv"
              controlId="floatingInputGrid"
              label="Nome"
            >
              <Form.Control type="text" placeholder="" />
            </FloatingLabel>
          </Col>
          <Col>
            <FloatingLabel
              className="drv"
              controlId="floatingInputGrid"
              label="Telefone"
            >
              <Form.Control type="tel" placeholder="" />
            </FloatingLabel>
          </Col>
          <Col md></Col>
        </Row>
        <Row className="g-2">
          <Col md>
            <FloatingLabel
              className="drv"
              controlId="floatingInputGrid"
              label="E-mail"
            >
              <Form.Control type="email" placeholder="" />
            </FloatingLabel>
          </Col>
          <Col md>
            <FloatingLabel
              className="drv"
              controlId="floatingInputGrid"
              label="Data de Nascimento"
            >
              <Form.Control type="date" placeholder="" />
            </FloatingLabel>
          </Col>
          <Col md></Col>
        </Row>
        <Button variant="btn btn-criar mt-3 ms-1">Salvar</Button>{" "}
      </div>
    </>
  );
};

export default RegistrarClientes;
