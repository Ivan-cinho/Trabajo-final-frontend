
import '../../estilos/layout/Footer.css';

const Footer = (props) => {
    return (
        <footer>
		<section className="seguinos">
				<section className="menu_seguinos">
					<a className="botones" href="https://www.instagram.com/bilardistasdelrock/?hl=es-la" target="_blank"><i className="fa-brands fa-instagram"></i></a>
					<a className="botones" href="https://www.youtube.com/channel/UC5RPH-oNYM137DuiaR-BywQ" target="_blank"><i className="fa-brands fa-youtube"></i></a>
					<a className="botones" href="https://open.spotify.com/artist/2Sb4FATY20WvoCSwySbP0X" target="_blank"><i className="fa-brands fa-spotify"></i></a>
				</section>
		</section>
	</footer>  
    );
}

export default Footer;