import { useState } from "react";
import { sculptureList } from "./data.js";

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  function handleNextClick() {
    setIndex(index + 1);
  }

  function handleAnterior() {
    setIndex(index - 1);
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];
  return (
    <>
    {
      /* 
      Utilitzem renderitzat condicional, si la part de l'esquerra és true renderitza la part dreta, altrament no fa res. 
      Aix+o funciona amb l'operador &&
        --> condicio && part a renderitzar
      */
    }

      {index < sculptureList.length - 1 && (
        <button onClick={handleNextClick}>Siguiente</button>
      )}
      {index > 0 && <button onClick={handleAnterior}>Anterior</button>}
      <h2>
        <i>{sculpture.name} </i>
        por {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} de {sculptureList.length})
      </h3>
      <button onClick={handleMoreClick}>
        {showMore ? "Ocultar" : "Mostrar"} detalles
      </button>
      {showMore && <p>{sculpture.description}</p>}
      <img src={sculpture.url} alt={sculpture.alt} />
    </>
  );
}
