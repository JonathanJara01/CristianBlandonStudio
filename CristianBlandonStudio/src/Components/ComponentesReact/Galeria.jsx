import { NavLink } from "react-router-dom";
import style from '../Css/Galeria.module.css'
import galeriaBoda from '../Fotos/galeriaBoda.png'
import galeriaBoda1 from '../Fotos/galeriaBoda1.png'
import galeriaBoda2 from '../Fotos/galeriaBoda2.png'
import galeriaBoda3 from '../Fotos/galeriaBoda3.png'
import galeriaBoda4 from '../Fotos/galeriaBoda4.png'
import galeriaBoda5 from '../Fotos/galeriaBoda5.png'



const galeria = ()=>{
    return(
        <div>
            <section className="d-flex align-items-center justify-content-center">
            <h1 className="text-center" >Galeria</h1>
            </section>
            <div className="card-body d-grid align-items-center justify-content-center ">
                <h5 className="card-title col-12 text-center ">Bodas</h5>
                <section>
                <img  src={galeriaBoda} width='300px'/>
                </section>
                <br />
                <section>
                <img  src={galeriaBoda5} width='300px'/>
                </section>
                <br/>
                <section>
                <img  src={galeriaBoda2} width='300px'/>
                </section>
                <br />
                <section>
                <img  src={galeriaBoda3} width='300px'/>
                </section>
                <br />
                <section>
                <img  src={galeriaBoda4} width='300px'/>
                </section>
                <br />
            <section>
            <img  src={galeriaBoda1} width='300px'/>
            </section>
            <br />
                <a href="#" className="btn btn-black">Inicio</a>
            </div>
            <NavLink to={'/Home'}>Retorna</NavLink>
        </div>
    )
};

export default galeria;