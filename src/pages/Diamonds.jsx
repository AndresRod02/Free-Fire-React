import React from 'react';
import { useSelector } from "react-redux";
import Swal from 'sweetalert2';
import RainEffect from '../components/RainEffect';
const Diamonds = () => {
    const username = useSelector((state) => state.username);
    const number = Math.floor(Math.random() * 1000) + 1555;
    const handleClick = () =>{
            if (username === "1545"){
                Swal.fire({
                    title: "¡Pedido completado!",
                    html: `<p>El código es válido, tus diamantes estarán en tu cuenta aproximadamente en 2 horas.</p> <br/>
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
    return(
        <div className='diamondsPage'>
            <RainEffect/>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", position: "absolute" }}>
      <form  className="formDiamonds"style={{padding: "16px", maxWidth: "350px", borderRadius: "8px", boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)", border: "3px solid #ffd700" }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: "600", textAlign: "center", color: "white", marginBottom: "16px" }}>
          Obtener diamantes
        </h2>
        
        <div style={{ position: "relative", marginBottom: "16px" }}>
          <input
            type="text"
            disabled
            defaultValue={username}
            style={{ width: "100%", padding: "12px", paddingRight: "40px", fontSize: "0.875rem", border: "1px solid #e5e7eb", borderRadius: "8px", boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)", backgroundColor: "white", border: "3px solid #ffd700" }}
          />
        </div>
        
        <div style={{ position: "relative", marginBottom: "16px" }}>
          <input
            type="number"
            placeholder="Diamantes a enviar"
            style={{ width: "100%", padding: "12px", paddingRight: "40px", fontSize: "0.875rem", border: "1px solid #e5e7eb", borderRadius: "8px", boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)", border: "3px solid #ffd700" }}
          />
        </div>
        <div style={{ position: "relative", marginBottom: "16px" }}>
          <input
            placeholder="Código del creador"
            style={{ width: "100%", padding: "12px", paddingRight: "40px", fontSize: "0.875rem", border: "1px solid #e5e7eb", borderRadius: "8px", boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)", border: "3px solid #ffd700" }}
          />
        </div>
        
        <button onClick={handleClick} style={{ display: "block", width: "100%", padding: "12px", backgroundColor: "gold", color: "black", fontSize: "0.875rem", fontWeight: "700", borderRadius: "8px", textTransform: "uppercase", cursor: "pointer", border: "none" }}>
          Enviar
        </button>
      </form>
    </div>
        </div>
    )
};

export default Diamonds;