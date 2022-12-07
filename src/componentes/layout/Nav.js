import { Link } from "react-router-dom";
import '../../estilos/layout/Nav.css';


const Nav = (props) => {
    return (
        <header>
            <nav>
                <a className="logo"><Link to="home"></Link></a>
                <div className="navbar">
                    <a className="navlink"><Link to="home">Inicio</Link></a>
                    <a className="navlink"><Link to="agenda">Agenda</Link></a>
                    <a className="navlink"><Link to="musica y redes">Musica y redes</Link></a>
                    <a className="navlink"><Link to="contacto">Contacto</Link></a>
                </div>
            </nav>
    </header>
    );
}

export default Nav;
