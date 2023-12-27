// Home.jsx
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../assets/home.css'; 
import fondoImagen from '../../assets/images/MainPicEmp.jpeg';
import { Helmet } from 'react-helmet';

const Home = () => {
  
  /*const [datos, setDatos] = React.useState(null);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3002/admin/uploaduser');
        if (!response.ok) {
          throw new Error('Error al obtener datos');
        }
        const data = await response.json();
        setDatos(data);
      } catch (error) {
        console.error('Error de red:', error);
      }
    }; 

    fetchData();
  }, []);
 console.log (datos)*/

  return (
    <Container className='containerStyle'>
      <Helmet><title>Home - Los Hornos</title></Helmet>
      <Row className="mb-4">
        <Col>
          <Card className="mainCard text-white" style={{ backgroundImage: `url(${fondoImagen})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <Card.Body>
              <div className="text-center">
                <Card.Title>Bienvenido a Los Hornos</Card.Title>
                <Card.Text>
                  Descubre los sabores auténticos de nuestra cocina. ¡Te damos la bienvenida a una experiencia culinaria única!
                </Card.Text>
                <Link to="/menu">
                  <Button variant="success" size="lg">
                    Ver Menú
                  </Button>
                </Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mb-4 secondaryCard">
        <Col>
          <h2>Nuestra Historia</h2>
          <p>
            En "Los Hornos", nos enorgullece ofrecer platos auténticos y de la más alta calidad. Desde nuestros inicios en 1990, nos hemos comprometido a brindar una experiencia gastronómica excepcional a nuestros clientes.
          </p>
        </Col>
      </Row>

      <Row className="mb-4 secondaryCard">
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
