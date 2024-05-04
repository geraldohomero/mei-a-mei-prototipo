import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import { jwtDecode } from "jwt-decode";
import { useState, useEffect } from "react";

const Registros = () => {
  const [faturamentos, setFaturamentos] = useState([]);
  const [despesas, setDespesas] = useState([]);
  const [produtos, setProdutos] = useState([]);
  const [servicos, setServicos] = useState([]);
  const [userId, setUserId] = useState(null);


  useEffect(() => {
    const token = localStorage.getItem('token');
    const decodedToken = jwtDecode(token);
    setUserId(decodedToken.nameid); // Atualizando o estado do userId
  }, []);

  useEffect(() => {
    if (userId) { // Verificando se userId está definido
      Promise.all([
        fetch('http://localhost:5062/api/Faturamentos').then(response => response.json()),
        fetch('http://localhost:5062/api/Despesas').then(response => response.json()),
        fetch('http://localhost:5062/api/Produtos').then(response => response.json()),
        fetch('http://localhost:5062/api/Servicos').then(response => response.json())
      ]).then(([dataFaturamentos, dataDespesas, dataProdutos, dataServicos]) => {
        console.log('Faturamentos ANTES da filtragem:', dataFaturamentos); // Log dos faturamentos antes da filtragem
        const faturamentosFiltrados = dataFaturamentos.filter(fat => String(fat.usuarioId) === String(userId));
        setFaturamentos(faturamentosFiltrados);
        console.log('Faturamentos DEPOIS da filtragem:', faturamentosFiltrados); // Log dos faturamentos depois da filtragem

        setDespesas(dataDespesas.filter(des => String(des.usuarioId) === String(userId)));
        console.log("Despesas:", dataDespesas);

        setProdutos(dataProdutos);
        console.log("Produtos:", dataProdutos);

        setServicos(dataServicos);
        console.log("Serviços:", dataServicos);
      })
        .catch((error) => {
          console.error("Erro ao buscar dados:", error);
        });
    }
  }, [userId]);

  return (
    <Container fluid className="w-75 mt-3 bg-light">
      <Row>
        <Col className="border border-warning p-3 m-3 box">
          <Row>
            <Col>
              <div className="b ">
                <h3>Registros de vendas</h3>
                <Table striped hover responsive size="sm">
                  <thead className="table-light ">
                    <tr>
                      <th>Data</th>
                      <th>Venda</th>
                      <th>Produto</th>
                      <th>Tipo</th>
                      <th>Meio de Pagmento</th>
                      <th>Valor</th>
                      <th>Serviço</th>
                    </tr>
                  </thead>
                  {
                    <tbody className="table-group-divider">
                      {faturamentos.filter(fat => fat.usuarioId === userId).map((fat) => {
                        let nomesItems = [];
                        let tipo = '';
                        if (fat.produtosId && fat.produtosId.length > 0) {
                          tipo = 'Produto';
                          nomesItems = fat.produtosId.map(id => {
                            const produto = produtos.find(prod => prod.id === id);
                            if (!produto) {
                              const servico = servicos.find(serv => serv.id === id);
                              return servico ? servico.nome : 'Item não encontrado';
                            }
                            return produto.nome;
                          });
                        } else {
                          tipo = 'Serviço';
                          nomesItems = fat.servicosId.map(id => {
                            const servico = servicos.find(serv => serv.id === id);
                            return servico ? servico.nome : 'Serviço não encontrado';
                          });
                        }
                        return (
                          <tr key={fat.id}>
                            <td>{fat.dataFaturamento}</td>
                            <td>{fat.nome}</td>
                            <td>{nomesItems.join(", ")}</td>
                            <td>{tipo}</td>
                            <td>{fat.meioDePagamento}</td>
                            <td>{fat.valor}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  }
                </Table>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col className="border border-warning p-3 m-3 box">
          <Row>
            <Col>
              <div className="b">
                <h3>Registros de despesas</h3>
                <Table striped hover responsive size="sm">
                  <thead className="table-light">
                    <tr>
                      <th>Data</th>
                      <th>Despesa</th>
                      <th>Categoria</th>
                      <th>Valor</th>
                    </tr>
                  </thead>
                  {
                    <tbody className="table-group-divider">
                      {despesas.filter(des => des.usuarioId === userId).map((des) => (
                        <tr key={des.id}>
                          <td>{des.dataDespesa}</td>
                          <td>{des.nome}</td>
                          <td>{des.categoriasId}</td>
                          <td>{des.valor}</td>
                        </tr>
                      ))}
                    </tbody>
                  }
                </Table>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Registros;
