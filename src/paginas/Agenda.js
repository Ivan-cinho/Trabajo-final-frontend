import React from 'react';
import '../estilos/paginas/Agenda.css'
import { useState, useEffect } from 'react';
import axios from 'axios';
import AgendaItem from '../componentes/layout/AgendaItem';



const Agenda = (props) => {
    const [loading, setLoading] = useState(false);
    const [agenda, setAgenda] = useState([]);

    useEffect(() => {
        const cargarAgenda = async () => {
            setLoading(true);
            const response = await axios.get('http://localhost:3000/api/agenda');
            setAgenda(response.data);
            setLoading(false)
        };
        cargarAgenda();
    }, []);


    return (
        <div className="contenedor-agenda">
            <h2>AGENDA</h2>
            <div className="contenedor-agenda_fechas">
                {
                    loading ? (
                        <p>Cargando...</p>
                    ) : (
                        agenda.map(item => <AgendaItem key={item.id}
                            fecha={item.fecha} local={item.local}
                            ciudad={item.ciudad} />)
                    )
                }

            </div>
        </div> 


    )
};

export default Agenda;



// imagen={item.imagen}