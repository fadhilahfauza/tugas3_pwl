import { Row, Col, Container, Image } from 'react-bootstrap';

export default function About() {
    return (
        <Container>
            <Row style={{ marginBottom: '10%', marginTop: '10%' }}>
                <Col lg={6}>
                    <Image src="/1.jpg" width='auto' fluid />
                </Col>
                <Col className=' align-items-center' style={{ marginTop: '50px' }}>
                    <Row>
                        <Col>
                            <h1>
                                About
                            </h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}