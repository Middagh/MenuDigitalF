import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import '../../assets/error404.css';

const PageNotFound = () => {
    return (
        <div className="not-found-container">
            <Helmet>
                <title>404 - Página no encontrada</title>
            </Helmet>
            <h1>404 - Página no encontrada</h1>
            <p>Lo sentimos, la página no está disponible.</p>
            <Link to="/">
                <Button variant="primary" className="m-2">
                    Volver a página principal
                </Button>
            </Link>
        </div>
    );
};

export default PageNotFound;