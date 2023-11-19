import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../../assets/aboutus.css';
import { Helmet } from 'react-helmet';

const AboutUs = () => {
  return (
    <Container className='containerFormLogin p-2 m-2'>
      <Helmet><title>Nosotros - Los Hornos</title></Helmet>
      <Row>
        <Col>
          <h2>Sobre Nosotros</h2>
          <p>
            En "Los Hornos", nos enorgullece ofrecer platos auténticos y de la más alta calidad. Desde nuestros inicios en 1990,
            nos hemos comprometido a brindar una experiencia gastronómica excepcional a nuestros clientes.
          </p>
          <p>
            Nuestra misión es deleitar a nuestros clientes con deliciosas comidas preparadas con ingredientes frescos y de calidad.
            Nos esforzamos por ofrecer un servicio amable y acogedor para que cada visita sea una experiencia memorable.
          </p>
          {/* Agrega más contenido sobre tu empresa según sea necesario */}
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
