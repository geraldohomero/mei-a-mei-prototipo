import React from 'react'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';


const RegProdutoServico = () => {
    return (
        <>
            <div>
                <h3>Adicione seu produto ou serviço</h3>
            </div>
            <div>
                <Row className="g-2">
                    <Col md>
                        <FloatingLabel controlId="floatingInputGrid" label="Produto/Serviço">
                            <Form.Control type="" placeholder="" />
                        </FloatingLabel>
                    </Col>
                    <Col md>
                    </Col>

                </Row>
                <Button variant="success mt-3">Adicionar</Button>{' '}

            </div>
        </>
    )
}

export default RegProdutoServico