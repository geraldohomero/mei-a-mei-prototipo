import React from 'react'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';

import { useState, useEffect } from 'react';

const Registros = () => {
    const [faturamentos, setFaturamentos] = useState([])
    const [despesas, setDespesas] = useState([])
    const [produtos, setProdutos] = useState([])

    useEffect(() => {
        fetch('https://localhost:7097/api/Faturamentos')
            .then(response => response.json())
            .then(
                (data) => {
                    setFaturamentos(data)

                }
            )
        fetch('https://localhost:7097/api/Despesas')
            .then(response => response.json())
            .then(
                (data) => {
                    setDespesas(data)
                }
            )
    })


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
                                        <th>Meio de Pagmento</th>
                                        <th>Valor</th>
                                    </tr>
                                </thead>
                                {<tbody className='table-group-divider'>
                                    {faturamentos.map((fat) => (
                                        <tr key={fat.id}>
                                            <td>{fat.dataFaturamento}</td>
                                            <td>{fat.nome}</td>
                                            <td>{fat.produtosId}</td>
                                            <td>{fat.meioDePagamento}</td>
                                            <td>{fat.valor}</td>
                                        </tr>
                                    ))}
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