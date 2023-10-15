import { useState, useEffect } from "react";
import axios from "axios";
import { Card, Container, Row, Col } from "react-bootstrap";

export default function Home() {
    const [storeeData, setstoreeData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `https://fakestoreapi.com/products`
                );
                setstoreeData(response.data);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };

        fetchData();
    }, []);

    return (
        <Container>
            <Row xs={1} md={2} lg={3} className="g-4 mt-5">
                {storeeData.length > 0 ? (
                    storeeData.map((storee, index) => (
                        <Col key={index}>
                            <Card>
                                {storee.image && <Card.Img variant="top" src={storee.image} />}
                                <Card.Body>
                                    <Card.Title>{storee.title}</Card.Title>
                                    <Card.Text>{storee.description}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                ) : (
                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Text>No storee available</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                )}
            </Row>
        </Container>
    );
}
