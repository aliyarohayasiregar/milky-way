import { useState } from "react";

export default function MovingDot() {
  const [posisi, setPosisi] = useState({ x: 0, y: 0 });

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  return (
    <div>
      <h1>Posisi X: {posisi.x}</h1>
      <h1>Posisi Y: {posisi.y}</h1>
      <button
        onClick={() => {
          setPosisi({ x: posisi.x + 1, y: 0 });
          console.log(posisi);
        }}
      >
        Geser ke kanan
      </button>
    </div>
    // <div
    //   onPointerMove={(e) => {
    //     setPosition({
    //       x: e.clientX,
    //       y: e.clientY,
    //     });
    //   }}
    //   style={{
    //     position: "relative",
    //     width: "100vw",
    //     height: "100vh",
    //   }}
    // >
    //   <div
    //     style={{
    //       position: "absolute",
    //       backgroundColor: "red",
    //       borderRadius: "50%",
    //       transform: `translate(${position.x}px, ${position.y}px)`,
    //       left: -10,
    //       top: -10,
    //       width: 20,
    //       height: 20,
    //     }}
    //   />
    // </div>
  );
}
