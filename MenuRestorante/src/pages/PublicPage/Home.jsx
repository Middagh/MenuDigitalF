// Home.jsx
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Bienvenido a Los Hornos</Card.Title>
              <Card.Text>
                Descubre los sabores auténticos de nuestra cocina. ¡Te damos la bienvenida a una experiencia culinaria única!
              </Card.Text>
              <div className="text-center"> {/* Utiliza la clase 'text-center' para centrar el contenido */}
                <Link to="/menu">
                  <Button variant="success">Ver Menú</Button>
                </Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col>
          <h2>Nuestra Historia</h2>
          <p>
            En "Los Hornos", nos enorgullece ofrecer platos auténticos y de la más alta calidad. Desde nuestros inicios en 1990, nos hemos comprometido a brindar una experiencia gastronómica excepcional a nuestros clientes.
          </p>
        </Col>
        <Col>
          <h2>Nuestro Menú</h2>
          <p>
            Explora nuestra amplia variedad de platos que reflejan la riqueza de la cocina local. Ya sea que prefieras platos clásicos o desees probar nuestras creaciones exclusivas, tenemos algo para todos los gustos.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
