import React from 'react';
import Swal from 'sweetalert2';
import { useSelector } from "react-redux";
const Skins = () => {
    const username = useSelector((state) => state.username);
    const number = Math.floor(Math.random() * 1000) + 1555;
    const input = () => {
        Swal.fire({
          title: "Ingresa el código",
          input: "text",
          inputPlaceholder: "Ingresa el código del creador",
          showCancelButton: false,
          confirmButtonText: "Aceptar",
          customClass: {
            popup: "golden-border",
            confirmButton: "custom-button"
          },
        }).then((result) => {
          if (result.isConfirmed) {
            handleClick(result.value); 
          }
        });
      };
    const handleClick = () =>{
        if (username === "1545"){
            Swal.fire({
                title: "¡Pedido completado!",
                html: `<p>El código es válido, tu skin estará en tu cuenta aproximadamente en 2 horas.</p> <br/>
                <p><strong>ID del envío:</strong> ${number}</p>`,
                icon: "success",
                customClass: {
                    popup: "golden-border",
                    confirmButton: "custom-button"
                  },
              });
        }
        else{
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Este código ya se agotó",
                customClass: {
                    popup: "golden-border",
                    confirmButton: "custom-button"
                  },
                footer: 'Intentalo nuevamente mañana'
              });
        }
    }


    return (<div className='skinsPage'>
        <h1>Escoge tu Skin</h1>
        <div className='gridCard'>
            <div className="card">
                <div className="image_container">
                    <img src='skin2.webp' width="160%"/>
                </div>
                <div className="title">
                    <span>Sakura</span>
                </div>
                <button className="cart-button" onClick={input}>
                    <span>Obtener</span>
                </button>
            </div>
            <div className="card">
                <div className="image_container">
                    <img src='skin2.webp' width="160%"/>
                </div>
                <div className="title">
                    <span>Sakura</span>
                </div>
                <button className="cart-button" onClick={input}>
                    <span>Obtener</span>
                </button>
            </div>
            <div className="card">
                <div className="image_container">
                    <img src='skin2.webp' width="160%"/>
                </div>
                <div className="title">
                    <span>Sakura</span>
                </div>
                <button className="cart-button" onClick={input}>
                    <span>Obtener</span>
                </button>
            </div>
            <div className="card">
                <div className="image_container">
                    <img src='skin2.webp' width="160%"/>
                </div>
                <div className="title">
                    <span>Sakura</span>
                </div>
                <button className="cart-button" onClick={input}>
                    <span>Obtener</span>
                </button>
            </div>
            <div className="card">
                <div className="image_container">
                    <img src='skin2.webp' width="160%"/>
                </div>
                <div className="title">
                    <span>Sakura</span>
                </div>
                <button className="cart-button" onClick={input}>
                    <span>Obtener</span>
                </button>
            </div>
            <div className="card">
                <div className="image_container">
                    <img src='skin2.webp' width="160%"/>
                </div>
                <div className="title">
                    <span>Sakura</span>
                </div>
                <button className="cart-button" onClick={input}>
                    <span>Obtener</span>
                </button>
            </div>
            <div className="card">
                <div className="image_container">
                    <img src='skin2.webp' width="160%"/>
                </div>
                <div className="title">
                    <span>Sakura</span>
                </div>
                <button className="cart-button" onClick={input}>
                    <span>Obtener</span>
                </button>
            </div>
            <div className="card">
                <div className="image_container">
                    <img src='skin2.webp' width="160%"/>
                </div>
                <div className="title">
                    <span>Sakura</span>
                </div>
                <button className="cart-button" onClick={input}>
                    <span>Obtener</span>
                </button>
            </div>
            <div className="card">
                <div className="image_container">
                    <img src='skin2.webp' width="160%"/>
                </div>
                <div className="title">
                    <span>Sakura</span>
                </div>
                <button className="cart-button" onClick={input}>
                    <span>Obtener</span>
                </button>
            </div>
        </div>
    </div>)
};

export default Skins;