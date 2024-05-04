import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

const RegistrarDespesas = () => {
  return (
    <>
      <Form className="d-flex justify-content-center" onSubmit={""}>
        <div className="drv">
          <Row className="g-5 mb-3">
            <Col className="col-6">
              <FloatingLabel
                controlId="floatingInputGrid"
                label="Despesa com ..."
              >
                <Form.Control
                  type="text"
                  name="nome"
                  placeholder=""
                  onChange={"handleSubmit"}
                />
              </FloatingLabel>
            </Col>
            <Col className="col-6">
              <FloatingLabel controlId="floatingSelectGrid" label="Categoria">
                <Form.Select name="categoriasId" onChange={""}>
                  <option value="1">Categorias</option>
                </Form.Select>
              </FloatingLabel>
            </Col>
          </Row>
          <Row className="g-5 d-flex justify-content-center mb-3">
            <Col className="col-6">
              <FloatingLabel controlId="floatingInputGrid" label="Data">
                <Form.Control
                  type="date"
                  name="dataFaturamento"
                  onChange={""}
                />
              </FloatingLabel>
            </Col>
            <Col className="col-6"></Col>
          </Row>
          <Row className="g-5 mb-3">
            <Col className="col-4">
              <FloatingLabel controlId="floatingInputGrid" label="R$">
                <Form.Control
                  type="number"
                  name="valor"
                  placeholder=""
                  onChange={"handleChange"}
                />
              </FloatingLabel>
            </Col>
          </Row>
          <Button variant="danger" type="submit">
            Adicionar despesa
          </Button>
        </div>
      </Form>
    </>
  );
};

export default RegistrarDespesas;
