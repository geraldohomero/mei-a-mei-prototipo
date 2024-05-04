import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { jwtDecode } from "jwt-decode";
import { useState } from "react";

const RegistrarDespesas = () => {
  const [despesa, setDespesa] = useState({
    id: "",
    nome: "",
    valor: 0,
    dataDespesa: "",
    categoriasId: [],
    usuarioId: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    const token = localStorage.getItem('token'); // Obtenha o token do localStorage
    const decodedToken = jwtDecode(token); // Decodifique o token
    const usuarioId = decodedToken.nameid; // Obtenha o usuarioId do token decodificado

    const despesaToSend = {
      ...despesa,
      usuarioId: usuarioId, // Adicione o usuarioId à despesa
      categoriasId: [], // Adicione o campo categoriasId. Você precisará atualizar isso para incluir as categorias corretas.
    };


    fetch("http://localhost:5062/api/Despesas", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(despesaToSend),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  const handleChange = (event) => {
    setDespesa({
      ...despesa,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      <Form className="d-flex justify-content-center" onSubmit={handleSubmit}>
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
                  onChange={handleChange}
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
                  name="dataDespesa"
                  onChange={handleChange}
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
                  onChange={handleChange}
                />
              </FloatingLabel>
            </Col>
          </Row>
          <Button variant="danger" type="submit">
            Adicionar despesa
          </Button> {''}
        </div>
      </Form>
    </>
  );
};

export default RegistrarDespesas;
