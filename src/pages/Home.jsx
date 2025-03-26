import React from 'react';
import 'boxicons'
import Username from '../components/Username';
const Home = () => {
    return (
        <div className='home'>
            <h1>Hola jugador</h1>
            <img src='/garena.webp' alt=""/>
            <img src="/hayato.webp" alt="" id='ash'/>
            <h2>Ingresa tu ID para empezar</h2>
            <Username></Username>
        </div>
    );
};

export default Home;