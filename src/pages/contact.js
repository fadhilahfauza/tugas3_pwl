import React, { useState, useContext } from "react";
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const MessageContext = React.createContext();

export default function Contact() {
    return (
        <Container>
            <h1 style={{ marginTop: '10%' }}>
                Contact
            </h1>
            <MessageProvider>
                <Row>
                    <Col>
                        <MessagesForm />
                    </Col>
                    <Col>
                        <MessageList />
                    </Col>
                </Row>
            </MessageProvider>
        </Container>
    );
}

function MessageProvider({ children }) {
    const [messages, setMessages] = useState([]);
    return (
        <MessageContext.Provider value={{ messages, setMessages }} >
            {children}
        </MessageContext.Provider>
    )
}

function MessagesForm() {
    const { messages, setMessages } = useContext(MessageContext);
    const [newMessages, setNewMessages] = useState('');

    const handleInputChange = (event) => {
        setNewMessages(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!newMessages.trim === "") return;

        const Object = {
            text: newMessages,
        }

        setMessages([...messages, Object])
        setNewMessages("");
    }

    return (
        <Row >
            <Col className='mt-5'>
                <Form>
                    <Form.Group>
                        <Form.Control type="text" onChange={handleInputChange} value={newMessages} />
                        <Button className="btn btn-primary mt-3" onClick={handleSubmit} style={{ width: '100%' }}>Submit</Button>
                    </Form.Group>
                </Form>
            </Col>

        </Row>
    );
}

function MessageList() {
    const { messages } = useContext(MessageContext);

    return (
        <>
            <h3 style={{ marginLeft: '10%', marginBottom: '20%' }}>
                Hasil Pesan Anda
                {messages.map((message, index) => (
                    <ul>
                        <li key={index}>{message.text}</li>
                    </ul>
                ))}
            </h3>
        </>
    );
}
