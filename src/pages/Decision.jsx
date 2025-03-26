import React from 'react';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
const Decision = () => {
    const navigate = useNavigate();
    const username = useSelector(state => state.username)
    return (
        <div className='decisionPage'>
            <h1>Hola {username}, ¿Qué quieres reclamar hoy?</h1>
            <div className='buttonContainer'>
                <button onClick={()=> navigate('/diamonds')}><img src='cuchillo.webp' width="70px"/><img src='diamante.webp' width="25cm"/>OBTENER DIAMANTES<img src='diamante.webp' width="25cm"/></button>
                <button onClick={()=> navigate('/skins')}><img src='cuchillo.webp' width="70px"/><img src='skin2.webp' width="45cm"/>OBTENER SKINS<img src='skin1.webp' width="30cm"/></button>
            </div>
        </div>
    )
};

export default Decision;