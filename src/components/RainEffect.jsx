import React, { useEffect, useState } from "react";

const RainEffect = () => {
  const [raindrops, setRaindrops] = useState([]);

  useEffect(() => {
    const numDrops = 20; // Cantidad de imágenes lloviendo
    const drops = [];

    for (let i = 0; i < numDrops; i++) {
      drops.push({
        id: i,
        left: Math.random() * 100 + "vw", // Posición horizontal aleatoria
        delay: Math.random() * 5 + "s", // Retraso aleatorio para que no caigan al mismo tiempo
        size: Math.random() * 30 + 20 + "px", // Tamaño aleatorio
        duration: Math.random() * 5 + 3 + "s", // Velocidad de caída aleatoria
      });
    }
    setRaindrops(drops);
  }, []);

  return (
    <div style={{ position: "relative", width: "100vw", height: "100vh", overflow: "hidden" }}>
      {raindrops.map((drop) => (
        <div
          key={drop.id}
          style={{
            position: "absolute",
            top: "-50px",
            left: drop.left,
            width: drop.size,
            height: drop.size,
            backgroundImage: "url('/diamante.webp')",
            backgroundSize: "cover",
            animation: `falling ${drop.duration} linear ${drop.delay} infinite`,
          }}
        />
      ))}
      <style>
        {`
          @keyframes falling {
            0% { transform: translateY(-50px); opacity: 1; }
            100% { transform: translateY(100vh); opacity: 0; }
          }
        `}
      </style>
    </div>
  );
};

export default RainEffect;
