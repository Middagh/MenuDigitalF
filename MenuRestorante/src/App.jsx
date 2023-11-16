import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';

const App = () => {
  return (
    <Container>
      <Header />
      <Row>
        <Col>
          <h1>Hello, React Bootstrap!</h1>
        </Col>
      </Row>
      <Footer />
    </Container>
  );
};

export default App;

