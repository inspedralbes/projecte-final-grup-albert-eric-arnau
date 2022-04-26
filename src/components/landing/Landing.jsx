import React, { useEffect, useState } from "react";
import { ChatView } from "../chat/ChatView";

export default function LandingView() {
  const [number, setNumber] = useState(0);

  const Sumar = () => {
    setNumber(number + 1);
    return number;
  };

  const arrayPelis = [
    {
      id: 1,
      title: "Titulo 1",
      year: "2000",
    },
    {
      id: 2,
      title: "Titulo 2",
      year: "2001",
    },
  ];

  useEffect(() => {
    console.log("useEffect");
  }, [number]);

  return (
    <>
      <div>
        <h1>Landing</h1>
        {number === 0 ? <h1>No hay datos</h1> : <h2>{number}</h2>}
        {arrayPelis.map(({ id, title, year }) => (
          <div key={id}>
            <h2>{title}</h2>
            <h5>{year}</h5>
          </div>
        ))}
        <button onClick={Sumar}>Sumar</button>
      </div>
    </>
  );
}
