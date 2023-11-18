import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
import '../assets/footer.css';

const Footer = () => (
    <footer className="page-footer font-small blue pt-4">
        <Container fluid className="text-center text-md-left">
            <Row>
                <Col md="6" className="mb-md-0 mb-3">
                    <h5 className="text-uppercase">Nuestras Redes</h5>
                    <ul className="list-unstyled">
                        <li>
                            <a href="https://www.instagram.com/loshornosyb/?hl=es!" target="_blank" rel="noopener noreferrer">
                                Instagram
                            </a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/loshornosybrestaurante/?locale=gl_ES!" target="_blank" rel="noopener noreferrer">
                                Facebook
                            </a>
                        </li>
                    </ul>
                </Col>

                <Col md="6" className="mb-md-0 mb-3">
                    <h5 className="text-uppercase">Links de utilidad</h5>
                    <ul className="list-unstyled">
                        <li>
                            <Link to="*">Trabajá con nosotros</Link>
                        </li>
                    </ul>
                </Col>
            </Row>
        </Container>

        <div className="footer-copyright text-center py-3">
            © 2023 Copyright:{" "}
            <a href="https://www.instagram.com/loshornosyb/?hl=es" target="_blank" rel="noopener noreferrer">
                Los Hornos
            </a>
        </div>
    </footer>
);

export default Footer;
