import React from 'react'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ProgressBar from 'react-bootstrap/ProgressBar';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { useState } from 'react';

const Registros = () => {
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
                                <tbody className='table-group-divider'>
                                    <tr>
                                        <td>17/04/2024</td>
                                        <td>Lavagem de carro</td>
                                        <td>Serviço</td>
                                        <td>Dinheiro</td>
                                        <td>R$ 700,00</td>
                                    </tr>
                                    <tr>
                                        <td>22/04/2024</td>
                                        <td>Biscoito cx 100</td>
                                        <td>Produto</td>
                                        <td>Cartão</td>
                                        <td>R$ 225,70</td>

                                    </tr>
                                    <tr>
                                        <td>23/04/2024</td>
                                        <td>Volante</td>
                                        <td>Produto</td>
                                        <td>PIX</td>
                                        <td>R$ 100,00</td>

                                    </tr>
                                </tbody>
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
                                <tbody className='table-group-divider'>
                                    <tr>
                                        <td>10/04/2024</td>
                                        <td>Luz</td>
                                        <td>Energia</td>
                                        <td>R$ 100,00</td>
                                    </tr>

                                </tbody>
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