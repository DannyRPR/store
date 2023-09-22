import{ React} from "react";
import "./Card.css";

// eslint-disable-next-line react/prop-types
const Card = ({ datos }) => {
  return (
    <div className="container">
      <div className="container__card">
      
        <div className="container__card-img">
          <img src={datos.image} alt="imagen de computador" />
          <h2> {datos.name}</h2>
        </div>

        <div className="container__card-description">
          <span>
            <b>Board:</b> {datos.board}
          </span>
          <br />
          <span>
            <b>Almacenamiento:</b> {datos.almacenamiento}
          </span>
          <br />
          <span>
            <b>Memoria RAM:</b> {datos.memoria}
          </span>
          <br />
          <span>
            <b>Tarjeta Grafica:</b> {datos.grafica}
          </span>
          <br />
          <span>
            <b>Procesador:</b> {datos.cpu}
          </span>
          <br />
          <span>
            <b>Nucleos del Procesador:</b> {datos.nucleos}
          </span>
          <br />
          <span>
            <b>Hilos del Procesador:</b> {datos.hilos}
          </span>
          <br />
          <span>
            <b>Fuente de poder:</b> {datos.fuente}
          </span>
          <br />
           <br />
          <span>
            <b>{datos.tipo} </b>Soporta trabajo  {datos.description}
          </span>
        </div>
       
      </div>
      
    </div>
  );
};

export default Card;
