import React from 'react';
import "./Card.css";
import computer from "../assets/xeon.jpg";
import computer2 from "../assets/ryzen.jpg"

const Card = () => {
  return (
    <div className="container">
          <div className="container__card">
            <div className="container__card-img">
              <img src={computer} alt="imagen de computador" />
            <h2>XEON UNITEC RGB</h2>
            </div>

            <div className="container__card-description">
              <span>
                <b>Board:</b> X79
              </span>
              <br />
              <span>
                <b>Almacenamiento:</b> Disco solido 500gb + disco mecanico 1
                tera
              </span>
              <br />
              <span>
                <b>Memoria RAM:</b> 16 gb
              </span>
              <br />
              <span>
                <b>Tarjeta Grafica:</b> RX 580 8gb
              </span>
              <br />
              <span>
                <b>Procesador:</b> Intel xeon cpu E5 2689
              </span>
              <br />
              <span>
                <b>Nucleos del Procesador:</b> 8
              </span>
              <br />
              <span>
                <b>Hilos del Procesador:</b> 16
              </span>
              <br />
              <span>
                <b>Fuente de poder:</b> 500W reales 80 plus bronce
              </span>
            </div>
          </div>
          <div className="container__card">
            <div className="container__card-img">
              <img src={computer2} alt="imagen de computador" />
            <h2>RYZEN GAMER</h2>
            </div>
            <div className="container__card-description">
              <span>
                <b>Board:</b> AMD B75
              </span>
              <br />
              <span>
                <b>Almacenamiento:</b> Disco solido 500gb + disco mecanico 1
                tera
              </span>
              <br />
              <span>
                <b>Memoria RAM:</b> 16 gb
              </span>
              <br />
              <span>
                <b>Tarjeta Grafica:</b> RX 580 8gb
              </span>
              <br />
              <span>
                <b>Procesador:</b> Ryzen 5
              </span>
              <br />
              <span>
                <b>Nucleos del Procesador:</b> 8
              </span>
              <br />
              <span>
                <b>Hilos del Procesador:</b> 16
              </span>
              <br />
              <span>
                <b>Fuente de poder:</b> 500W reales 80 plus bronce
              </span>
            </div>
          </div>
        </div>
  )
}

export default Card


