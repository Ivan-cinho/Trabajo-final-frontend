import React from 'react';

const AgendaItem = (props) => {
    const { fecha, local, ciudad, imagen, body } = props;

    return (
        <div className='contenedor-agenda_fechas'>
            <img className='flyer' src={imagen} />
            <ul>
                <li className="fecha">{fecha}</li>
                <li className="lugar">{local}</li>
                <li className="entradas">{ciudad}</li>
            </ul>
            <div dangerouslySetInnerHTML={{ __html: body }} />
        </div>

    );
}

export default AgendaItem;