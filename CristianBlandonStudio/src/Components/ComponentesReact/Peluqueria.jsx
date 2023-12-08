import { NavLink } from 'react-router-dom';
import imagen from '../Fotos/cbniña.png';
import style from '../Css/Servicios.module.css'

const Peluqueria = ()=>{
    return(
        <div>
            <div className="d-flex align-items-center justify-content-center" >
            <h1>Servicios De Peluqueria</h1>
            </div>
            <br />
            <div className="d-flex align-items-center justify-content-center " >
            <img src={imagen} alt='cbniña' width='600px'></img>
            </div>

            {/*//////////////////// CARD DESCRIPCION /////////////////////*/}

            <div className="card-body col-12 text-center">
                <h5 className="card-title">Maquillaje</h5>
                <section>
                <p className="card-text ">Sumérgete en el fascinante mundo del maquillaje de la mano de nuestro talentoso estilista, donde la belleza se convierte en una obra maestra.
                Desde la sutileza del día hasta el glamour de la noche, nuestros consejos de preparación de la piel y técnicas de maquillaje te empoderarán para crear looks deslumbrantes mientras cuidas y respetas la salud de tu piel.</p>
                </section>
            </div>
            <br />
            <div className="card-body card-body col-12 text-center">
                <h5 className="card-title">Color</h5>
                <section>
                <p className="card-text">Descubre un mundo de posibilidades para transformar tu imagen con nuestro estilista experto en coloración capilar. Desde los tonos clásicos y elegantes hasta los atrevidos y vanguardistas, nuestro estilista dominará el arte de mezclar colores para encontrar la paleta perfecta que complemente tu estilo y te haga brillar.</p>
                </section>
            </div>
            <br />
            <div className="card-body card-body col-12 text-center">
                <h5 className="card-title">Cortes Y Cepillado</h5>
                <section>
                <p className="card-text">Cada tijeretazo es una oportunidad para esculpir una obra de arte en tu cabello, mientras que nuestro experto cepillado y peinado añadirán el toque final de elegancia y pulido a tu apariencia. Ya sea que busques una transformación audaz o un simple refrescamiento, nuestro estilista te brindará la atención individualizada que mereces, asegurando que salgas luciendo y sintiéndote espectacular.</p>
                </section>
                <br />
                <a href="#" className="btn btn-black">Inicio</a>
            </div>
        </div>
    )
};

export default Peluqueria;