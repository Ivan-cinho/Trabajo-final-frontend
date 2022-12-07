import React from 'react';
import '../estilos/paginas/Musicayredes.css';

const Musicayredes = (props) =>{
    return(
        <main>
        <section className="contenedor">
            <div className="contenedor-musica">
                <div className="imagen-descripcion">
                    <div className="deepConurba-imagen"></div>
                    <div className="deepConurba-texto">
                        <h2>★ Deep Conurba ★</h2>
                        <p>2do material de estudio de la banda, producido, grabado y mezclado en EGO estudio y Malfatto por ¨Menchu¨ Raimondi, ¨Michu¨ Miciudas y Bilardistas, masterizado por Facundo Salerno, portada por Alejandro Williams y ¨Taki¨ Moran.</p>
                        <a href="https://www.youtube.com/channel/UC5RPH-oNYM137DuiaR-BywQ" target="_blank"><i className="fa-brands fa-youtube"></i></a>
                        <a href="https://open.spotify.com/album/1spEXLYWCPBzHka64Bb7xj" target="_blank"><i className="fa-brands fa-spotify"></i></a>
                    </div>
                </div>
                <div className="deepConurba-spoti"><iframe src="https://open.spotify.com/embed/album/1spEXLYWCPBzHka64Bb7xj?utm_source=generator" width="100%" height="180" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe></div>
            </div>
            <div className="contenedor-musica">
                <div className="imagen-descripcion">
                    <div className="contraTodoPronostico-texto">
                        <h2>★ Contra todo pronostico ★</h2>
                        <p>1er material de estudio de la banda, producido, grabado y mezclado en EGO estudio y Malfatto por ¨Menchu¨ Raimondi, ¨Michu¨ Miciudas y Bilardistas, masterizado por Nahuel Martorelli, portada por ¨el Deivid¨ Venegas.</p>
                        <a href="https://www.youtube.com/channel/UC5RPH-oNYM137DuiaR-BywQ" target="_blank"><i className="fa-brands fa-youtube"></i></a>
                        <a href="https://open.spotify.com/album/1ELydXz8laHO736WoX6ysT" target="_blank"><i className="fa-brands fa-spotify"></i></a>
                    </div>
                    <div className="contraTodoPronostico-imagen"></div>
                </div>
                <div className="contraTodoPronostico-spoti"><iframe src="https://open.spotify.com/embed/album/1ELydXz8laHO736WoX6ysT?utm_source=generator&theme=0" width="100%" height="180" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe></div>
            </div>
        </section>
    </main>
    );
}

export default Musicayredes;