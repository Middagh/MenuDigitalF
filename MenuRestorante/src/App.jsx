import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../src/pages/PublicPage/Home';
import Register from '../src/pages/PublicPage/register';
import Login from './pages/PublicPage/loginUsuario';

/*import PrivateRoutes from './PrivateRoutes';*/

const App = () => {
  return (
    <Router>
      <Container>
        <Header />
        <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />

        </Routes>
        <Footer />
      </Container>
    </Router>
  );
};

export default App;

