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
import RegProdutoServico from '../RegProdutoServico/RegProdutoServico';

const Gerenciamento = () => {
    const [now, setNow] = useState(0)
    let progress = '';
    if (now >= 80) {
        progress = 'danger';
    } else if (now >= 60) {
        progress = 'warning';
    } else {
        progress = '';
    }
    return (
        <Container fluid className='w-75 mt-3 bg-light'>
            <Row>
                <Col className='border border-warning p-3 m-3 box'>
                    <Row>
                        <Tabs
                            defaultActiveKey="venda"
                            id="uncontrolled-tab-example"
                            className="mb-3"
                        >
                            <Tab eventKey="s" title="Produtos e Serviços">
                                <RegProdutoServico />
                            </Tab>
                            <Tab eventKey="f" title="Categorias">

                            </Tab>
                        </Tabs>
                    </Row>
                </Col>
            </Row>

        </Container>

    )
}

export default Gerenciamento