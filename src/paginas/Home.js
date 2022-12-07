import React from 'react';
import '../estilos/paginas/Home.css';


const Home = (props) => {
    return (
    <main>
		<h1>★ Bilardistas ★</h1>
		<section className="contenedor-banner">
			<div className="contenedor-banner_descripcion">
				<h2>23 de octubre lanzamiento de <br/>"Deep Conurba"</h2>
				<p>Desde el lunes 23 de mayo Deep conurba, segundo material de Bilardistas, disponible en la Matrix (spotify, apple music, youtube y demas plataformas).</p>
				<a href="https://open.spotify.com/album/1spEXLYWCPBzHka64Bb7xj" target="_blank">Escuchalo</a>
			</div>
		</section>
		<section className='proximos-shows'>
			<h2>Show Proximo</h2>
			<div className='contenedor-flyer'></div>
		</section>

	</main> 
    );
}


export default Home;