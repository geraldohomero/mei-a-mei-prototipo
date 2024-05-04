import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

const RegistrarServicos = () => {
  return (
    <>
      <div>
        <Row className="g-2">
          <Col md>
            <FloatingLabel
              className="drv"
              controlId="floatingInputGrid"
              label="Serviço"
            >
              <Form.Control type="" placeholder="" />
            </FloatingLabel>
          </Col>
          <Col md></Col>
        </Row>
        <Button variant="btn btn-criar mt-3 ms-1">Salvar</Button>{" "}
      </div>
    </>
  );
};

export default RegistrarServicos;
