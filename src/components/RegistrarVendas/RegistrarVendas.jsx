import React, { useState, useEffect } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

const RegistrarVendas = () => {
  const [venda, setVenda] = useState({
    id: '',
    produtosId: [],
    servicosId: [],
    nome: '',
    valor: 0,
    dataFaturamento: '',
    meioDePagamento: ''
  });

  const [produtosServicos, setProdutosServicos] = useState([]);

  useEffect(() => {
    fetch('https://localhost:5062/api/Produtos')
      .then(response => response.json())
      .then(data => setProdutosServicos(data));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    const vendaToSend = {
      ...venda,
      produtosId: Array.isArray(venda.produtosId) ? venda.produtosId.map(String) : [],
      servicosId: Array.isArray(venda.servicosId) ? venda.servicosId.map(String) : [],
      meioDePagamento: Number(venda.meioDePagamento)
    };

    fetch('http://localhost:5062/api/Faturamentos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(vendaToSend)


    })
      .then(response => response.json())
      .then(data => console.log(data));
  };

  const handleChange = (event) => {
    setVenda({
      ...venda,
      [event.target.name]: event.target.value
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row className="g-2">
        <Col md>
          <FloatingLabel controlId="floatingInputGrid" label="Venda de...">
            <Form.Control type="text" name="nome" onChange={handleChange} />
          </FloatingLabel>
        </Col>
        <Col md>
          <FloatingLabel controlId="floatingSelectGrid" label="Produto/Serviço">
            <Form.Select name="produtosId" onChange={handleChange}>
              <option value="1">Produto</option>
              <option value="2">Serviço</option>
            </Form.Select>
          </FloatingLabel>
        </Col>
      </Row>
      <Row className="g-2 mt-1">
        <Col md>
          <FloatingLabel controlId="floatingInputGrid" label="Data">
            <Form.Control type="date" name="dataFaturamento" onChange={handleChange} />
          </FloatingLabel>
        </Col>
        <Col md>
          <FloatingLabel controlId="floatingSelectGrid" label="Meio de pagamento">
            <Form.Select name="meioDePagamento" onChange={handleChange}>
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão">Cartão</option>
              <option value="PIX">PIX</option>
              <option value="Outro">Outro</option>
            </Form.Select>
          </FloatingLabel>
        </Col>
        <Col>
          <FloatingLabel controlId="floatingInputGrid" label="Valor">
            <Form.Control type="number" name="valor" onChange={handleChange} />
          </FloatingLabel>
        </Col>
      </Row>
      <Button variant="success mt-3" type="submit">Adicionar venda</Button>{' '}
    </Form>
  );
};

export default RegistrarVendas;