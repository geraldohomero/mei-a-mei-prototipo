import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { useState } from "react";
import RegProdutoServico from "../RegProdutoServico/RegProdutoServico";

const Gerenciamento = () => {
  return (
    <Container fluid className="w-75 mt-3 bg-light">
      <Row>
        <Col className="border border-warning p-3 m-3 box">
          <Row>
            <Tabs
              defaultActiveKey="venda"
              id="uncontrolled-tab-example"
              className="mb-3"
            >
              <Tab eventKey="venda" title="Produtos">
                <h4 className="py-3 ps-1">Registre uma venda</h4>
              </Tab>
              <Tab eventKey="despesas" title="Serviços">
                <h4 className="py-3 ps-1">Registre uma despesa</h4>
              </Tab>
              <Tab eventKey="categoria" title="Categoria">
                <h4 className="py-3 ps-1">Registre uma despesa</h4>
              </Tab>
              <Tab eventKey="clientes" title="Clientes">
                <h4 className="py-3 ps-1">Registre uma despesa</h4>
              </Tab>
              <Tab eventKey="contador" title="Contador">
                <h4 className="py-3 ps-1">Registre uma despesa</h4>
              </Tab>
            </Tabs>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col className="border border-warning p-3 m-3 box">
          <Row>
            <Tabs
              defaultActiveKey="venda"
              id="uncontrolled-tab-example"
              className="mb-3"
            >
              <Tab eventKey="s" title="Produtos e Serviços">
                <RegProdutoServico />
              </Tab>
              <Tab eventKey="f" title="Categorias"></Tab>
            </Tabs>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Gerenciamento;
