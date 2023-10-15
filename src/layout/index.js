import { Outlet } from 'react-router-dom'
import Header from './Header'
import Navigation from './Navbar'
import Footer from './Footer'
import { Row, Col } from 'react-bootstrap'

export default function Layout() {
    return (
        <div id="layout-wrapper" style={{ overflowX: 'hidden' }}>
            <Row>
                <Col className='d-flex justify-content-center'>
                    <Header />
                </Col>
            </Row>

            <Row>
                <Col>
                    <Navigation />
                </Col>
            </Row>

            <Row>
                <Col className='d-flex justify-content-center'>
                    <Outlet />
                </Col>
            </Row>

            <Row className='m-0 p-0'>
                <Col>
                    <Footer />
                </Col>
            </Row>
        </div>
    );
}