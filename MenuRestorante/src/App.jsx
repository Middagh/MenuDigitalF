import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../src/components/Header';

const App = () => {
  return (
    <Container>
      <Header />

      <Row>
        <Col>
          <h1>Hello, React Bootstrap!</h1>
        </Col>
      </Row>
    </Container>
  );
};

export default App;

