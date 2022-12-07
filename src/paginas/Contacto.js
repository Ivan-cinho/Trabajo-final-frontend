import React from 'react';
import '../estilos/paginas/Contacto.css'
import { useState } from 'react';
import axios from 'axios';

const Contacto = (props) =>{

    const initialForm = {
        nombre: '',
        mail: '',
        comentanos: ''

    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const {name, value} = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value
        }));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true)
        const response = await axios.post('http://localhost:3000/api/contacto', formData);
        setSending(false);
        setMsg(response.data.message);
        if (response.data.error === false) {
            setFormData(initialForm)
        }
    }

    



    return(
        <main>
            <section className="formcontainer">
                <h2>RECIBI NUESTRO NEWSLETTER</h2>
                <form action="/contacto" method='post' onSubmit={handleSubmit} className  ="formulario">
                    <label className="form__label">Nombre</label>
                    <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} className="form__input"/>
                    <label className="form__label">Mail</label>
                    <input type="text" name="mail" value={formData.mail} onChange={handleChange} className="form__input"/>
                    <label className="form__label">Comentanos</label>
                    <textarea className="form__textArea" name="comentanos" value={formData.comentanos} onChange={handleChange}></textarea>
                    <input type="submit" name="Enviar" className="form__enviar--submit"/>
                    {sending ? <p>Enviando...</p> : null}
                    {msg ? <p>{msg}</p> : null}
                </form>	
            </section>
        </main>
    );
}

export default Contacto;