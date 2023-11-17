import React from "react"
import '../assets/footer.css';


const Footer = () => <footer className="page-footer font-small blue pt-4">
    <div className="container-fluid text-center text-md-left">
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
                <h5 className="text-uppercase">Los Hornos</h5>
                <p> Parrillada tradicional tucumana con mas de 30 años brindando los mejores platos criollos del NOA</p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0" />

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Nuestras Redes</h5>
                <ul className="list-unstyled">
                    <li><a href="https://www.instagram.com/loshornosyb/?hl=es!">Instagram</a></li>
                    <li><a href="https://www.facebook.com/loshornosybrestaurante/?locale=gl_ES!">Facebook</a></li>
                </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Links de utilidad</h5>
                <ul className="list-unstyled">
                    <li><a href="#!">Trabajá con nosotros</a></li>
                </ul>
            </div>
        </div>
    </div>

    <div className="footer-copyright text-center py-3">© 2020 Copyright:
        <a href="https://www.instagram.com/loshornosyb/?hl=es">Los Hornos</a>
    </div>

</footer>

export default Footer