import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';

import { useState, useEffect } from 'react';

const Registros = () => {
    const [faturamentos, setFaturamentos] = useState([])
    const [despesas, setDespesas] = useState([])
    const [produtos, setProdutos] = useState([])
    const [servicos, setServicos] = useState([]);

    useEffect(() => {
        Promise.all([
            fetch('http://localhost:5062/api/Faturamentos').then(response => response.json()),
            fetch('http://localhost:5062/api/Despesas').then(response => response.json()),
            fetch('http://localhost:5062/api/Produtos').then(response => response.json()),
            fetch('http://localhost:5062/api/Servicos').then(response => response.json())
        ]).then(([dataFaturamentos, dataDespesas, dataProdutos, dataServicos]) => {
            setFaturamentos(dataFaturamentos);
            console.log('Faturamentos:', dataFaturamentos);

            setDespesas(dataDespesas);
            console.log('Despesas:', dataDespesas);

            setProdutos(dataProdutos);
            console.log('Produtos:', dataProdutos);

            setServicos(dataServicos);
            console.log('Serviços:', dataServicos);
        }).catch(error => {
            console.error('Erro ao buscar dados:', error);
        });
    }, []);

    return (
        <Container fluid className='w-75 mt-3 bg-light'>
            <Row>
                <Col className='border border-warning p-3 m-3 box'>
                    <Row>
                        <Col><div className='b'>
                            <h3>Registros de vendas</h3>
                            <Table striped hover responsive size="sm">
                                <thead className='table-light'>
                                    <tr>
                                        <th>Data</th>
                                        <th>Venda</th>
                                        <th>Produto/Serviço</th>
                                        <th>Tipo</th>
                                        <th>Meio de Pagmento</th>
                                        <th>Valor</th>
                                    </tr>
                                </thead>
                                {<tbody className='table-group-divider'>
                                    {faturamentos.map((fat) => {
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
                                                <td>{nomesItems.join(', ')}</td>
                                                <td>{tipo}</td>
                                                <td>{fat.meioDePagamento}</td>
                                                <td>{fat.valor}</td>
                                            </tr>
                                        );
                                    })}
                                </tbody>}
                            </Table>
                        </div>
                        </Col>
                    </Row>

                </Col>
            </Row>
            <Row>
                <Col className='border border-warning p-3 m-3 box'>
                    <Row>
                        <Col><div className='b'>
                            <h3>Registros de despesas</h3>
                            <Table striped hover responsive size="sm">
                                <thead className='table-light'>
                                    <tr>
                                        <th>Data</th>
                                        <th>Despesa</th>
                                        <th>Categoria</th>
                                        <th>Valor</th>
                                    </tr>
                                </thead>
                                {<tbody className='table-group-divider'>
                                    {despesas.map((des) => (
                                        <tr key={des.id}>
                                            <td>{des.dataDespesa}</td>
                                            <td>{des.nome}</td>
                                            <td>{des.categoriasId}</td>
                                            <td>{des.valor}</td>
                                        </tr>
                                    ))}
                                </tbody>}
                            </Table>
                        </div>
                        </Col>
                    </Row>

                </Col>
            </Row>

        </Container>
    )
}

export default Registros